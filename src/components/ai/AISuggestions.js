import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../ui/Button';
export function AISuggestions({ suggestions, onSelect }) {
    return (_jsxs("div", { className: "p-3 space-y-2", children: [_jsx("p", { className: "text-xs text-gray-500 font-medium", children: "Suggested questions:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: suggestions.map((suggestion, index) => (_jsx(Button, { variant: "outline", size: "sm", className: "text-sm bg-gray-50 hover:bg-gray-100", onClick: () => onSelect(suggestion), children: suggestion }, index))) })] }));
}
