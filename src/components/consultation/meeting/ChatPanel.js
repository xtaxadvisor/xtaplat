import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { Send, AlertCircle, Check, CheckCheck } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { formatTime } from '../../../utils/date';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
export function ChatPanel({ messages, onSendMessage, onRetryMessage, isLoading, isSending }) {
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMessage.trim() && !isSending) {
            onSendMessage(newMessage);
            setNewMessage('');
        }
    };
    const getMessageStatus = (status) => {
        switch (status) {
            case 'sent':
                return _jsx(Check, { className: "h-4 w-4 text-gray-400" });
            case 'delivered':
                return _jsx(CheckCheck, { className: "h-4 w-4 text-blue-500" });
            case 'failed':
                return (_jsxs("button", { onClick: () => onRetryMessage?.(message.id), className: "flex items-center text-red-500 hover:text-red-600", children: [_jsx(AlertCircle, { className: "h-4 w-4 mr-1" }), "Retry"] }));
            default:
                return null;
        }
    };
    if (isLoading) {
        return (_jsx("div", { className: "flex items-center justify-center h-full", children: _jsx(LoadingSpinner, {}) }));
    }
    return (_jsxs("div", { className: "flex flex-col h-full bg-white", children: [_jsx("div", { className: "p-4 border-b", children: _jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Chat" }) }), _jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [messages.map((message) => (_jsxs("div", { className: `flex flex-col ${message.sender === 'You' ? 'items-end' : 'items-start'}`, children: [_jsxs("div", { className: `max-w-[80%] rounded-lg px-4 py-2 ${message.sender === 'You'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-900'}`, children: [_jsx("p", { className: "text-sm font-medium mb-1", children: message.sender }), _jsx("p", { children: message.content })] }), _jsxs("div", { className: "flex items-center mt-1 space-x-2", children: [_jsx("span", { className: "text-xs text-gray-500", children: formatTime(message.timestamp) }), message.sender === 'You' && getMessageStatus(message.status)] })] }, message.id))), _jsx("div", { ref: messagesEndRef })] }), _jsx("form", { onSubmit: handleSubmit, className: "border-t p-4", children: _jsxs("div", { className: "flex space-x-2", children: [_jsx(Input, { value: newMessage, onChange: (e) => setNewMessage(e.target.value), placeholder: "Type your message...", className: "flex-1", disabled: isSending }), _jsx(Button, { type: "submit", variant: "primary", icon: Send, disabled: isSending || !newMessage.trim() })] }) })] }));
}
