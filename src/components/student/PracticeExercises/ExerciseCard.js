import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BookOpen, Award, Clock } from 'lucide-react';
import { Button } from '../../ui/Button';
export function ExerciseCard({ exercise, onStart }) {
    const getDifficultyStyle = (difficulty) => {
        switch (difficulty) {
            case 'beginner':
                return 'bg-green-100 text-green-800';
            case 'intermediate':
                return 'bg-yellow-100 text-yellow-800';
            case 'advanced':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    return (_jsx("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900", children: exercise.title }), _jsx("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getDifficultyStyle(exercise.difficulty)}`, children: exercise.difficulty })] }), _jsx("p", { className: "text-gray-600 mb-4", children: exercise.description }), _jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("div", { className: "flex items-center text-gray-500", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), exercise.duration] }), _jsxs("div", { className: "flex items-center text-gray-500", children: [_jsx(Award, { className: "h-4 w-4 mr-1" }), exercise.points, " points"] })] }), _jsx(Button, { variant: "primary", className: "w-full", icon: BookOpen, onClick: () => onStart(exercise.id), children: "Start Exercise" })] }) }));
}
