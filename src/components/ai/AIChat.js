import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Bot, X } from 'lucide-react';
import { AIMessageList } from './chat/AIMessageList';
import { AIMessageInput } from './chat/AIMessageInput';
import { AIWelcomeMessage } from './AIWelcomeMessage';
import { AISuggestions } from './AISuggestions';
import { AIContextualHelp } from './chat/AIContextualHelp';
import { useAI } from '../../hooks/useAI';
import { detectContext, getContextualSuggestions } from '../../utils/ai/contextDetection';
export function AIChat({ onClose }) {
    const [context, setContext] = React.useState('visitor');
    const { messages, sendMessage, isLoading } = useAI({ context });
    const handleSendMessage = async (content) => {
        const newContext = detectContext(content);
        setContext(newContext);
        await sendMessage(content);
    };
    const handleSuggestionSelect = (suggestion) => {
        handleSendMessage(suggestion);
    };
    return (_jsxs("div", { className: "fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden", children: [_jsxs("div", { className: "flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Bot, { className: "h-6 w-6" }), _jsxs("div", { children: [_jsx("h3", { className: "font-medium", children: "AI Assistant" }), _jsx("p", { className: "text-xs text-blue-100", children: "How can I help you?" })] })] }), _jsx("button", { onClick: onClose, className: "text-white hover:text-blue-100 transition-colors", children: _jsx(X, { className: "h-5 w-5" }) })] }), _jsxs("div", { className: "h-[500px] flex flex-col", children: [messages.length === 0 ? (_jsxs("div", { className: "flex-1 overflow-y-auto", children: [_jsx(AIWelcomeMessage, {}), _jsx(AISuggestions, { suggestions: getContextualSuggestions('visitor'), onSelect: handleSuggestionSelect })] })) : (_jsx(AIMessageList, { messages: messages, isTyping: isLoading })), _jsxs("div", { className: "mt-auto", children: [messages.length > 0 && (_jsx(AIContextualHelp, { context: context, suggestions: getContextualSuggestions(context), onSelect: handleSuggestionSelect })), _jsx(AIMessageInput, { onSend: handleSendMessage, isDisabled: isLoading, placeholder: "Type your message..." })] })] })] }));
}
