import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Lightbulb } from 'lucide-react';
export function AIContextualHelp({ suggestions, onSelect }) {
    return (_jsxs("div", { className: "p-4 bg-blue-50 rounded-lg", children: [_jsxs("div", { className: "flex items-center space-x-2 mb-3", children: [_jsx(Lightbulb, { className: "h-5 w-5 text-blue-600" }), _jsx("span", { className: "text-sm font-medium text-blue-900", children: "Related Questions" })] }), _jsx("div", { className: "space-y-2", children: suggestions.map((suggestion, index) => (_jsx("button", { onClick: () => onSelect(suggestion), className: "w-full text-left p-2 text-sm text-blue-700 hover:bg-blue-100 rounded transition-colors duration-200", children: suggestion }, index))) })] }));
}
