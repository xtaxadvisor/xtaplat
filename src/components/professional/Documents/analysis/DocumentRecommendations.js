import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FileText } from 'lucide-react';
export function DocumentRecommendations({ recommendations }) {
    return (_jsxs("div", { className: "border rounded-lg p-4", children: [_jsx("h4", { className: "font-medium text-gray-900", children: "Recommendations" }), _jsx("ul", { className: "mt-2 space-y-2 text-gray-600", children: recommendations.map((recommendation, index) => (_jsxs("li", { className: "flex items-center space-x-2", children: [_jsx(FileText, { className: "h-4 w-4 text-blue-500" }), _jsx("span", { children: recommendation.message })] }, index))) })] }));
}
