import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from 'react';
import { AIMessage } from './AIMessage';
import { AITypingIndicator } from './AITypingIndicator';
export function AIMessageList({ messages, isTyping }) {
    const messagesEndRef = useRef(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);
    return (_jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [messages.map((message, index) => (_jsx(AIMessage, { message: message }, index))), isTyping && _jsx(AITypingIndicator, {}), _jsx("div", { ref: messagesEndRef })] }));
}
