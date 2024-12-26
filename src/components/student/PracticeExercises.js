import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BookOpen, Award, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
export function PracticeExercises() {
    const exercises = [
        {
            id: '1',
            title: 'Tax Calculation Basics',
            description: 'Learn the fundamentals of tax calculations through interactive exercises.',
            duration: '45 minutes',
            difficulty: 'beginner',
            points: 100
        },
        {
            id: '2',
            title: 'Financial Statement Analysis',
            description: 'Practice analyzing balance sheets and income statements.',
            duration: '60 minutes',
            difficulty: 'intermediate',
            points: 150
        },
        {
            id: '3',
            title: 'Advanced Tax Planning',
            description: 'Master complex tax planning scenarios and strategies.',
            duration: '90 minutes',
            difficulty: 'advanced',
            points: 200
        }
    ];
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Practice Exercises" }), _jsx("div", { className: "flex items-center space-x-4", children: _jsxs("div", { className: "text-sm text-gray-500", children: [_jsx("span", { className: "font-medium", children: "Total Points:" }), " 450"] }) })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: exercises.map((exercise) => (_jsx("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900", children: exercise.title }), _jsx("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${exercise.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                                            exercise.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'}`, children: exercise.difficulty })] }), _jsx("p", { className: "text-gray-600 mb-4", children: exercise.description }), _jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("div", { className: "flex items-center text-gray-500", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), exercise.duration] }), _jsxs("div", { className: "flex items-center text-gray-500", children: [_jsx(Award, { className: "h-4 w-4 mr-1" }), exercise.points, " points"] })] }), _jsx(Button, { variant: "primary", className: "w-full", icon: BookOpen, children: "Start Exercise" })] }) }, exercise.id))) })] }));
}
