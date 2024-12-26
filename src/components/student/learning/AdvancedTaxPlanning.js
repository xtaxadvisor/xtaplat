import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TrendingUp, BookOpen, Video, FileText, CheckCircle } from 'lucide-react';
import { Button } from '../../ui/Button';
export function AdvancedTaxPlanning() {
    const sections = [
        {
            title: 'Advanced Tax Planning Strategies',
            content: 'Learn sophisticated tax planning techniques for complex financial situations.',
            duration: '45 min',
            type: 'video',
            icon: Video
        },
        {
            title: 'Tax Law and Regulations',
            content: 'Understanding current tax laws and their implications for planning.',
            duration: '60 min',
            type: 'lesson',
            icon: BookOpen
        },
        {
            title: 'Strategic Tax Management',
            content: 'Master advanced tax management and optimization strategies.',
            duration: '50 min',
            type: 'interactive',
            icon: TrendingUp
        },
        {
            title: 'Complex Case Studies',
            content: 'Analyze and solve advanced tax planning scenarios.',
            duration: '90 min',
            type: 'exercise',
            icon: FileText
        }
    ];
    return (_jsx("div", { className: "space-y-6", children: _jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Advanced Tax Planning" }), _jsx("p", { className: "text-gray-600 mb-6", children: "Master advanced tax planning strategies and optimize financial outcomes through sophisticated techniques." }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8", children: [_jsxs("div", { className: "bg-amber-50 rounded-lg p-4", children: [_jsx("h3", { className: "font-medium text-amber-900", children: "Course Overview" }), _jsxs("ul", { className: "mt-2 space-y-2", children: [_jsxs("li", { className: "flex items-center text-amber-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Advanced Planning Strategies"] }), _jsxs("li", { className: "flex items-center text-amber-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Tax Law Applications"] }), _jsxs("li", { className: "flex items-center text-amber-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Strategic Management"] }), _jsxs("li", { className: "flex items-center text-amber-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Complex Scenarios"] })] })] }), _jsxs("div", { className: "bg-orange-50 rounded-lg p-4", children: [_jsx("h3", { className: "font-medium text-orange-900", children: "Learning Outcomes" }), _jsxs("ul", { className: "mt-2 space-y-2", children: [_jsxs("li", { className: "flex items-center text-orange-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Develop advanced strategies"] }), _jsxs("li", { className: "flex items-center text-orange-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Apply tax regulations"] }), _jsxs("li", { className: "flex items-center text-orange-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Optimize tax positions"] }), _jsxs("li", { className: "flex items-center text-orange-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Handle complex cases"] })] })] })] }), _jsx("div", { className: "space-y-4", children: sections.map((section, index) => (_jsx("div", { className: "bg-white border rounded-lg p-4 hover:shadow-md transition-shadow", children: _jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "p-2 bg-orange-50 rounded-lg", children: _jsx(section.icon, { className: "h-6 w-6 text-orange-600" }) }), _jsxs("div", { className: "ml-4 flex-1", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: section.title }), _jsx("p", { className: "text-gray-600 mt-1", children: section.content }), _jsxs("div", { className: "flex items-center justify-between mt-4", children: [_jsxs("span", { className: "text-sm text-gray-500", children: ["Duration: ", section.duration] }), _jsxs(Button, { variant: "primary", size: "sm", children: ["Start ", section.type] })] })] })] }) }, index))) })] }) }));
}
