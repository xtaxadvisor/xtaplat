import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Bot } from 'lucide-react';
import { Button } from '../ui/Button';
export function AIAssistantBubble({ onOpen, unreadCount }) {
    return (_jsx("div", { className: "fixed bottom-4 right-4 z-50", children: _jsxs(Button, { onClick: onOpen, className: "relative p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200", children: [_jsx(Bot, { className: "h-6 w-6" }), unreadCount != null && unreadCount > 0 && (_jsx("span", { className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full", children: unreadCount }))] }) }));
}
