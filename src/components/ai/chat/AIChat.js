import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { AIMessageList } from './AIMessageList';
import { AIMessageInput } from './AIMessageInput';
import { AIWelcomeMessage } from '../AIWelcomeMessage';
import { AISuggestions } from '../AISuggestions';
import { AIHeader } from './AIHeader';
export function AIChat({ messages, onSendMessage, isLoading, error }) {
    const suggestions = [
        'What services do you offer?',
        'How can I schedule a consultation?',
        'What are your business hours?',
        'Do you offer virtual meetings?'
    ];
    return (_jsxs("div", { className: "flex flex-col h-[500px]", children: [_jsx(AIHeader, { onClose: () => { } }), _jsx("div", { className: "flex-1 overflow-y-auto", children: messages.length === 0 ? (_jsxs(_Fragment, { children: [_jsx(AIWelcomeMessage, {}), _jsx(AISuggestions, { suggestions: suggestions, onSelect: onSendMessage })] })) : (_jsx(AIMessageList, { messages: messages, isTyping: isLoading })) }), _jsx(AIMessageInput, { onSend: onSendMessage, isDisabled: isLoading, placeholder: "Type your message..." }), error && (_jsx("div", { className: "p-4 bg-red-50 text-red-600 text-sm border-t border-red-100", children: error.message }))] }));
}
