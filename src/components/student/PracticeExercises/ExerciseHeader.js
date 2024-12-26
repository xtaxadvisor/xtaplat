import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useExercises } from '../../../hooks/useExercises';
export function ExerciseHeader() {
    const { totalPoints } = useExercises();
    return (_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Practice Exercises" }), _jsx("div", { className: "flex items-center space-x-4", children: _jsxs("div", { className: "text-sm text-gray-500", children: [_jsx("span", { className: "font-medium", children: "Total Points:" }), " ", totalPoints] }) })] }));
}
