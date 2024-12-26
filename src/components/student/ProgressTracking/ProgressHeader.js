import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Award } from 'lucide-react';
export function ProgressHeader() {
    return (_jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Progress Tracking" }), _jsx("p", { className: "text-gray-600", children: "Track your learning journey and achievements" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Award, { className: "h-6 w-6 text-blue-600" }), _jsx("span", { className: "text-lg font-medium text-gray-900", children: "Level 5" })] })] }));
}
