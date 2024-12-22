import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FileText, Download } from 'lucide-react';
import { formatTimeAgo } from '../../utils/date';
export function MessageItem({ message }) {
    const isOwnMessage = message.senderId === 'currentUser'; // Replace with actual user ID logic
    return (_jsx("div", { className: `flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`, children: _jsxs("div", { className: `max-w-lg rounded-lg px-4 py-2 ${isOwnMessage
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-900'}`, children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("span", { className: "font-medium", children: message.senderId }), _jsx("span", { className: "text-sm opacity-75", children: formatTimeAgo(message.timestamp) })] }), _jsx("p", { className: "mt-1", children: message.content }), message.attachments?.map((attachment, index) => (_jsxs("div", { className: "mt-2 flex items-center space-x-2", children: [_jsx(FileText, { className: "h-4 w-4" }), _jsx("span", { className: "text-sm", children: attachment }), _jsx("button", { className: "text-sm hover:opacity-75", children: _jsx(Download, { className: "h-4 w-4" }) })] }, index)))] }) }));
}
