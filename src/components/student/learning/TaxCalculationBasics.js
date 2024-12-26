import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calculator, Book, Video, FileText, CheckCircle } from 'lucide-react';
import { Button } from '../../ui/Button';
export function TaxCalculationBasics() {
    const sections = [
        {
            title: 'Introduction to Tax Calculations',
            content: 'Learn the fundamental concepts of tax calculations and their importance in financial planning.',
            duration: '15 min',
            type: 'video',
            icon: Video
        },
        {
            title: 'Basic Tax Formulas',
            content: 'Understanding essential tax formulas and their practical applications.',
            duration: '20 min',
            type: 'lesson',
            icon: Book
        },
        {
            title: 'Tax Brackets and Rates',
            content: 'Comprehensive guide to understanding tax brackets and how rates are applied.',
            duration: '25 min',
            type: 'interactive',
            icon: Calculator
        },
        {
            title: 'Practice Problems',
            content: 'Apply your knowledge with real-world tax calculation scenarios.',
            duration: '30 min',
            type: 'exercise',
            icon: FileText
        }
    ];
    return (_jsx("div", { className: "space-y-6", children: _jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Tax Calculation Basics" }), _jsx("p", { className: "text-gray-600 mb-6", children: "Master the fundamentals of tax calculations with our comprehensive learning materials." }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8", children: [_jsxs("div", { className: "bg-blue-50 rounded-lg p-4", children: [_jsx("h3", { className: "font-medium text-blue-900", children: "Course Overview" }), _jsxs("ul", { className: "mt-2 space-y-2", children: [_jsxs("li", { className: "flex items-center text-blue-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Basic Tax Concepts"] }), _jsxs("li", { className: "flex items-center text-blue-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Tax Rate Calculations"] }), _jsxs("li", { className: "flex items-center text-blue-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Deductions and Credits"] }), _jsxs("li", { className: "flex items-center text-blue-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Practical Applications"] })] })] }), _jsxs("div", { className: "bg-green-50 rounded-lg p-4", children: [_jsx("h3", { className: "font-medium text-green-900", children: "Learning Outcomes" }), _jsxs("ul", { className: "mt-2 space-y-2", children: [_jsxs("li", { className: "flex items-center text-green-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Calculate basic tax liabilities"] }), _jsxs("li", { className: "flex items-center text-green-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Understand tax brackets"] }), _jsxs("li", { className: "flex items-center text-green-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Apply tax formulas"] }), _jsxs("li", { className: "flex items-center text-green-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Solve real-world scenarios"] })] })] })] }), _jsx("div", { className: "space-y-4", children: sections.map((section, index) => (_jsx("div", { className: "bg-white border rounded-lg p-4 hover:shadow-md transition-shadow", children: _jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "p-2 bg-blue-50 rounded-lg", children: _jsx(section.icon, { className: "h-6 w-6 text-blue-600" }) }), _jsxs("div", { className: "ml-4 flex-1", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: section.title }), _jsx("p", { className: "text-gray-600 mt-1", children: section.content }), _jsxs("div", { className: "flex items-center justify-between mt-4", children: [_jsxs("span", { className: "text-sm text-gray-500", children: ["Duration: ", section.duration] }), _jsxs(Button, { variant: "primary", size: "sm", children: ["Start ", section.type] })] })] })] }) }, index))) })] }) }));
}
