import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Bot, User } from 'lucide-react'; // Importing icons
// AIMessage functional component
export function AIMessage({ message }) {
    const isUser = message.role === 'user';
    return (_jsxs("div", { className: `flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`, children: [!isUser && (_jsx("div", { className: "flex-shrink-0 mr-3", children: _jsx("div", { className: "w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center", children: _jsx(Bot, { className: "h-5 w-5 text-blue-600" }) }) })), _jsx("div", { className: `flex flex-col max-w-[80%] ${isUser ? 'items-end' : 'items-start'}`, children: _jsx("div", { className: `rounded-lg px-4 py-2 ${isUser
                        ? 'bg-blue-600 text-white' // User messages in blue
                        : 'bg-gray-100 text-gray-900' // Bot messages in gray
                    }`, children: _jsx("p", { className: "text-sm whitespace-pre-wrap", children: message.content }) }) }), isUser && (_jsx("div", { className: "flex-shrink-0 ml-3", children: _jsx("div", { className: "w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center", children: _jsx(User, { className: "h-5 w-5 text-gray-600" }) }) }))] }));
}
