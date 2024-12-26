import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Award } from 'lucide-react';
export function AchievementList() {
    const achievements = [
        { name: 'Tax Master', description: 'Complete 5 tax calculation exercises', date: '2 days ago' },
        { name: 'Quick Learner', description: 'Finish 3 exercises in one day', date: '5 days ago' },
        { name: 'Perfect Score', description: 'Score 100% on an advanced exercise', date: '1 week ago' }
    ];
    return (_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Recent Achievements" }), _jsx("div", { className: "space-y-4", children: achievements.map((achievement, index) => (_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center", children: _jsx(Award, { className: "h-4 w-4 text-blue-600" }) }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-900", children: achievement.name }), _jsx("p", { className: "text-sm text-gray-500", children: achievement.description }), _jsx("p", { className: "text-xs text-gray-400 mt-1", children: achievement.date })] })] }, index))) })] }));
}
