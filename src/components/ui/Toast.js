import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { X } from 'lucide-react';
export function Toast({ message, type, onClose }) {
    const bgColor = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500'
    }[type];
    return (_jsxs("div", { className: `${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center justify-between`, children: [_jsx("span", { children: message }), _jsx("button", { onClick: onClose, className: "ml-4 hover:opacity-75", children: _jsx(X, { className: "h-4 w-4" }) })] }));
}
