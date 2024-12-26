import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { X } from 'lucide-react';
import { Button } from './Button';
export function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 z-50 overflow-y-auto", children: _jsxs("div", { className: "flex min-h-screen items-center justify-center p-4", children: [_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-25 transition-opacity", onClick: onClose }), _jsxs("div", { className: "relative bg-white rounded-lg shadow-xl max-w-md w-full", children: [_jsxs("div", { className: "flex items-center justify-between p-4 border-b", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: title }), _jsx(Button, { variant: "outline", size: "sm", onClick: onClose, icon: X, className: "text-gray-400 hover:text-gray-500" })] }), _jsx("div", { className: "p-6", children: children })] })] }) }));
}
