import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BarChart2, BookOpen, Video, FileText, CheckCircle } from 'lucide-react';
import { Button } from '../../ui/Button';
export function FinancialStatementAnalysis() {
    const sections = [
        {
            title: 'Understanding Financial Statements',
            content: 'Learn to read and interpret balance sheets, income statements, and cash flow statements.',
            duration: '30 min',
            type: 'video',
            icon: Video
        },
        {
            title: 'Key Financial Ratios',
            content: 'Master the essential financial ratios used in statement analysis.',
            duration: '45 min',
            type: 'lesson',
            icon: BookOpen
        },
        {
            title: 'Trend Analysis',
            content: 'Learn how to analyze financial trends and make informed decisions.',
            duration: '40 min',
            type: 'interactive',
            icon: BarChart2
        },
        {
            title: 'Case Studies',
            content: 'Apply your knowledge to real-world financial statement analysis scenarios.',
            duration: '60 min',
            type: 'exercise',
            icon: FileText
        }
    ];
    return (_jsx("div", { className: "space-y-6", children: _jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Financial Statement Analysis" }), _jsx("p", { className: "text-gray-600 mb-6", children: "Develop expertise in analyzing financial statements and making data-driven decisions." }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8", children: [_jsxs("div", { className: "bg-purple-50 rounded-lg p-4", children: [_jsx("h3", { className: "font-medium text-purple-900", children: "Course Overview" }), _jsxs("ul", { className: "mt-2 space-y-2", children: [_jsxs("li", { className: "flex items-center text-purple-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Financial Statement Components"] }), _jsxs("li", { className: "flex items-center text-purple-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Ratio Analysis"] }), _jsxs("li", { className: "flex items-center text-purple-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Trend Analysis"] }), _jsxs("li", { className: "flex items-center text-purple-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Decision Making"] })] })] }), _jsxs("div", { className: "bg-indigo-50 rounded-lg p-4", children: [_jsx("h3", { className: "font-medium text-indigo-900", children: "Learning Outcomes" }), _jsxs("ul", { className: "mt-2 space-y-2", children: [_jsxs("li", { className: "flex items-center text-indigo-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Interpret financial statements"] }), _jsxs("li", { className: "flex items-center text-indigo-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Calculate key ratios"] }), _jsxs("li", { className: "flex items-center text-indigo-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Analyze financial trends"] }), _jsxs("li", { className: "flex items-center text-indigo-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Make informed decisions"] })] })] })] }), _jsx("div", { className: "space-y-4", children: sections.map((section, index) => (_jsx("div", { className: "bg-white border rounded-lg p-4 hover:shadow-md transition-shadow", children: _jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "p-2 bg-indigo-50 rounded-lg", children: _jsx(section.icon, { className: "h-6 w-6 text-indigo-600" }) }), _jsxs("div", { className: "ml-4 flex-1", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: section.title }), _jsx("p", { className: "text-gray-600 mt-1", children: section.content }), _jsxs("div", { className: "flex items-center justify-between mt-4", children: [_jsxs("span", { className: "text-sm text-gray-500", children: ["Duration: ", section.duration] }), _jsxs(Button, { variant: "primary", size: "sm", children: ["Start ", section.type] })] })] })] }) }, index))) })] }) }));
}
