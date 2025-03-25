module.exports = {

"[project]/.next-internal/server/app/api/chat/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@opentelemetry/api", () => require("@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/node:fs [external] (node:fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}}),
"[externals]/node:stream [external] (node:stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}}),
"[externals]/node:stream/web [external] (node:stream/web, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:stream/web", () => require("node:stream/web"));

module.exports = mod;
}}),
"[project]/app/data/projects.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "projects": (()=>projects)
});
const projects = [
    {
        name: '다모아 울산',
        image: '/assets/damoa.png',
        description: '',
        stack: [
            'React',
            'MySQL',
            'Python',
            'Spring',
            'OpenSearch',
            'OpenAI'
        ],
        role: '프론트엔드 전체 및 데이터 크롤링 서버',
        environment: 'Azure + Nginx + MySQL',
        period: '3개월',
        features: [
            '크롤링을 통한 울산시 데이터 정기수집 하여 포털형태로 제공',
            'GPT 모델을 울산시 정보에 맞게 파인튜닝하여 LLM 서비스 구축.',
            '공공기관 API 연동 하여 편의 정보 제공'
        ],
        link: 'https://www.ulsan.go.kr/damoa'
    },
    {
        name: 'PG 정산시스템',
        image: '/assets/ggpay.png',
        stack: [
            'React',
            'MariaDB',
            'Express',
            'Spring'
        ],
        role: '1인 개발 및 운영',
        environment: 'Linux + Nginx + MySQL + Docker + Github Actions',
        period: '3개월',
        features: [
            'PG의 카드결제 노티데이터 연동',
            '가맹점과 영업점에 따른 수수료적용 및 시각화',
            '다중 PG 연동 및 6종 수수료체계 적용',
            '카드 수기결제'
        ]
    },
    {
        name: '사내업무웹',
        image: '/assets/panffice.png',
        stack: [
            'React',
            'MariaDB',
            'Spring'
        ],
        role: '1인 개발 및 운영',
        environment: 'Linux + Nginx + MySQL + Docker + Github Actions',
        period: '1개월',
        features: [
            '기존 구글시트로 진행하던 업무를 웹앱으로 전환'
        ]
    },
    {
        name: '카드개인결제 서비스',
        image: '/assets/ggshop.png',
        stack: [
            'React',
            'MariaDB',
            'Express',
            'Spring'
        ],
        role: '1인 개발 및 운영',
        environment: 'Linux + Nginx + MySQL + Docker + Github Actions',
        period: '3개월',
        features: [
            'NICE API 본인인증 연동',
            'PG 카드결제 모듈 연동',
            'Github Action CI/CD',
            '카드 결제 및 결제정보 시각화'
        ]
    },
    {
        name: '담배피는 호랑이',
        image: '/assets/damho.png',
        stack: [
            'VUE',
            'MongoDB',
            'Express',
            'PWA'
        ],
        role: '1인 개발 및 운영',
        environment: 'AWS + Nginx + MongoDB, 원스토어',
        period: '1개월',
        features: [
            '상품 주문 및 영업점 납품거래처 관리 웹앱',
            'PWA 적용 및 firebase push 알림',
            '원스토어 배포'
        ]
    },
    {
        name: '한별투어 (과제)',
        image: '/assets/tour.png',
        stack: [
            'Spring',
            'Thymeleaf',
            'Python',
            'Oracle',
            'Tensorflow'
        ],
        role: '백엔드 프론트 머신러닝',
        period: '2개월',
        features: [
            '개발자 양성과정 팀 프로젝트 과제',
            '여행상품판매 쇼핑몰',
            'logistic을 외부데이터로 학습하여 페이지에 등록된 리뷰에 대한 긍/부정 및 사용단어통계'
        ]
    }
];
}}),
"[project]/app/api/chat/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$projects$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/projects.js [app-route] (ecmascript)");
;
;
const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: 'https://openrouter.ai/api/v1'
});
function formatProjectData(projects) {
    return projects.map((p)=>{
        return `📌 ${p.name}  
🔹 기술 스택: ${p.stack.join(', ')}  
🔹 역할: ${p.role}  
🔹 기간: ${p.period}  
🔹 주요 기능: ${p.features.join(', ')}  
`;
    }).join('\n\n');
}
async function POST(req) {
    try {
        const { messages } = await req.json();
        const completion = await openai.chat.completions.create({
            model: 'openai/gpt-3.5-turbo',
            stream: true,
            messages: [
                {
                    role: 'system',
                    content: `당신은 개발자 윤지수의 AI 비서입니다. 다음 프로젝트에 대한 질문에만 답변하세요:\n\n${formatProjectData(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$projects$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"])}\n\n다른 주제에는 응답하지 마세요.`
                },
                ...messages
            ]
        });
        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start (controller) {
                for await (const chunk of completion){
                    const content = chunk.choices?.[0]?.delta?.content;
                    if (content) {
                        controller.enqueue(encoder.encode(content));
                    }
                }
                controller.close();
            }
        });
        return new Response(stream, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8'
            }
        });
    } catch (err) {
        console.error('[GPT API Error]', err);
        return new Response('GPT 호출 오류: ' + err.message, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__1d3fd907._.js.map