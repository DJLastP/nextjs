'use client';

import React, { useState, useRef, useEffect } from 'react';

const GPTChat = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const messageContainerRef = useRef(null); // ✅ 메시지 영역 ref

    // ✅ 새 메시지 생기면 메시지 영역만 스크롤 이동
    useEffect(() => {
        const container = messageContainerRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMessage = { role: 'user', content: input };
        setMessages((prev) => [...prev, newMessage, { role: 'assistant', content: '' }]);
        setInput('');
        setIsLoading(true);

        const response = await fetch('/api/chat', {
            method: 'POST',
            body: JSON.stringify({
                messages: [
                    {
                        role: 'system',
                        content: '당신은 윤지수라는 개발자 본인을 대신해 대답하는 AI 비서입니다. 다른 주제에 대해서는 응답하지 마세요.',
                    },
                    ...messages,
                    newMessage,
                ],
            }),
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let result = '';
        let done = false;

        while (!done) {
            const { value, done: doneReading } = await reader.read();
            done = doneReading;
            result += decoder.decode(value);

            setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = { role: 'assistant', content: result };
                return updated;
            });
        }

        setIsLoading(false);
    };

    return (
        <div className="border rounded-md p-4 bg-gray-50 dark:bg-gray-800 text-sm space-y-4 h-72 flex flex-col">
            {/* ✅ 메시지 영역에만 스크롤 */}
            <div
                ref={messageContainerRef}
                className="flex-1 overflow-y-auto space-y-2 pr-1"
            >
                {messages.length === 0 && !isLoading && (
                    <div className="text-center text-gray-400 dark:text-gray-500 mt-4">
                        윤지수님에 대해 궁금한 점을 입력해보세요.
                    </div>
                )}
                {messages.map((msg, i) => (
                    <div key={i} className={`${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                        <p
                            className={`inline-block px-3 py-2 rounded-md whitespace-pre-line
            ${msg.role === 'user'
                                ? 'bg-blue-100 dark:bg-blue-600 text-blue-900 dark:text-blue-100'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100'}
            `}
                        >
                            {msg.content}
                        </p>
                    </div>
                ))}
                {isLoading && (
                    <p className="text-left text-gray-500 italic whitespace-pre-line">
                        응답 생성 중...
                    </p>
                )}
            </div>

            {/* 입력 영역 */}
            <form onSubmit={handleSubmit} className="flex gap-2 pt-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-md border dark:bg-gray-700 dark:text-white"
                    placeholder="윤지수님에 대해 궁금한 점을 물어보세요"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                    disabled={isLoading}
                >
                    전송
                </button>
            </form>
        </div>
    );
};

export default GPTChat;
