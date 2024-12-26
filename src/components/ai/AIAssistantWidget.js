import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { Bot } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAI } from '../../hooks/useAI';
import { AIChat } from './chat/AIChat';
export function AIAssistantWidget({ className = '' }) {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, sendMessage, isLoading, error } = useAI();
    const handleSendMessage = useCallback(async (content) => {
        try {
            await sendMessage(content);
        }
        catch (error) {
            // Error handling is done in useAI hook
        }
    }, [sendMessage]);
    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: `fixed bottom-4 right-4 z-50 ${className}`, children: _jsx(Button, { onClick: () => setIsOpen(true), className: "p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200", children: _jsx(Bot, { className: "h-6 w-6" }) }) }), isOpen && (_jsx("div", { className: "fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50", children: _jsx(AIChat, { messages: messages, onSendMessage: handleSendMessage, isLoading: isLoading, error: error }) }))] }));
}
