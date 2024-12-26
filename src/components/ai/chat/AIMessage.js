import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Bot, User } from 'lucide-react';
export function AIMessage({ message }) {
    const isUser = message.role === 'user';
    return (_jsxs("div", { className: `flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`, children: [!isUser && (_jsx("div", { className: "mr-3 flex-shrink-0", children: _jsx("div", { className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center", children: _jsx(Bot, { className: "h-5 w-5 text-blue-600" }) }) })), _jsx("div", { className: `max-w-[80%] rounded-lg px-4 py-2 ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`, children: _jsx("p", { className: "text-sm", children: message.content }) }), isUser && (_jsx("div", { className: "ml-3 flex-shrink-0", children: _jsx("div", { className: "w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center", children: _jsx(User, { className: "h-5 w-5 text-gray-600" }) }) }))] }));
}
