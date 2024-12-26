import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '../../ui/Button';
export function AIResponseActions({ onCopy, onFeedback }) {
    return (_jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [_jsx(Button, { variant: "ghost", size: "sm", icon: Copy, onClick: onCopy, className: "text-gray-500 hover:text-gray-700", children: "Copy" }), _jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(Button, { variant: "ghost", size: "sm", icon: ThumbsUp, onClick: () => onFeedback(true), className: "text-gray-500 hover:text-green-600" }), _jsx(Button, { variant: "ghost", size: "sm", icon: ThumbsDown, onClick: () => onFeedback(false), className: "text-gray-500 hover:text-red-600" })] })] }));
}
