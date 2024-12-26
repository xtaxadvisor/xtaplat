import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Bot, X } from 'lucide-react';
import { Button } from '../../ui/Button';
export function AIHeader({ onClose }) {
    return (_jsxs("div", { className: "flex items-center justify-between p-4 border-b", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "p-2 bg-blue-100 rounded-full", children: _jsx(Bot, { className: "h-5 w-5 text-blue-600" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-medium text-gray-900", children: "AI Assistant" }), _jsx("p", { className: "text-xs text-gray-500", children: "Always here to help" })] })] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: onClose, icon: X, className: "text-gray-500 hover:text-gray-700" })] }));
}
