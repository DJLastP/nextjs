import OpenAI from 'openai';
import { projectFaq } from '@/data/faq';

const openai = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: 'https://openrouter.ai/api/v1',
});

function formatFaq(faq) {
    return faq.map(item => `Q: ${item.question}\nA: ${item.answer}`).join('\n\n');
}

export async function GET() {
    return new Response('테스트 GET 성공', { status: 200 });
}

// ✅ POST 요청 처리
export async function POST(req) {
    try {
        const { messages } = await req.json();

        const completion = await openai.chat.completions.create({
            model: 'openai/gpt-3.5-turbo',
            stream: true,
            messages: [
                {
                    role: 'system',
                    content: `당신은 개발자 윤지수의 AI 비서입니다. 다음 규칙을 지켜서 답변하세요:
- 긴 문장은 2줄 이하로 줄바꿈 하세요.
- 질문에 대한 답변은 명확히 구분되는 문단으로 나누세요.
- 목록은 - 기호를 사용해 정리하세요.
- 아래 Q&A에 기반해 답변하세요. 없으면 '알 수 없습니다'라고 하세요.

${formatFaq(projectFaq)}
                `,
                },
                ...messages,
            ],
        });

        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start(controller) {
                for await (const chunk of completion) {
                    const content = chunk.choices?.[0]?.delta?.content;
                    if (content) {
                        controller.enqueue(encoder.encode(content));
                    }
                }
                controller.close();
            },
        });

        return new Response(stream, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Access-Control-Allow-Origin': '*', // ✅ CORS 허용
            },
        });
    } catch (err) {
        console.error('[GPT API Error]', err);
        return new Response('GPT 호출 오류: ' + err.message, { status: 500 });
    }
}
