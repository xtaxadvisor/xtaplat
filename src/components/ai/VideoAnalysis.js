import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Brain, Lightbulb, Target, BookOpen } from 'lucide-react';
import { useAI } from '../../hooks/useAI';
import { Button } from '../ui/Button';
export function VideoAnalysis({ video }) {
    const { sendMessage, messages, isLoading } = useAI({
        context: 'student',
        enableAnalysis: true
    });
    const generateInsights = async () => {
        const prompt = `Analyze this educational video:
      Title: ${video.title}
      Description: ${video.description}
      Category: ${video.category}
      Tags: ${video.tags.join(', ')}
      
      Please provide:
      1. Key learning outcomes
      2. Who this course is best suited for
      3. Prerequisites or recommended background
      4. Related topics to explore`;
        await sendMessage(prompt);
    };
    return (_jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 mt-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsxs("h3", { className: "text-lg font-semibold text-gray-900 flex items-center", children: [_jsx(Brain, { className: "h-5 w-5 text-blue-600 mr-2" }), "AI Course Analysis"] }), _jsx(Button, { variant: "outline", size: "sm", icon: Lightbulb, onClick: generateInsights, disabled: isLoading, children: isLoading ? 'Analyzing...' : 'Generate Insights' })] }), messages.length > 0 && (_jsx("div", { className: "space-y-4", children: messages.map((message, index) => (message.role === 'assistant' && (_jsx("div", { className: "prose max-w-none", children: _jsxs("div", { className: "bg-blue-50 rounded-lg p-4", children: [_jsxs("div", { className: "flex items-center mb-3", children: [_jsx(Target, { className: "h-5 w-5 text-blue-600 mr-2" }), _jsx("h4", { className: "text-sm font-medium text-blue-900", children: "Learning Insights" })] }), _jsx("div", { className: "text-sm text-blue-800 whitespace-pre-wrap", children: message.content })] }) }, index)))) })), !messages.length && !isLoading && (_jsxs("div", { className: "text-center py-6", children: [_jsx(BookOpen, { className: "h-12 w-12 text-gray-400 mx-auto mb-3" }), _jsx("p", { className: "text-gray-500", children: "Click \"Generate Insights\" to get AI-powered analysis of this course" })] }))] }));
}
