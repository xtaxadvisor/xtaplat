import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { StudentDashboard } from '../../components/student/StudentDashboard';
import { StudentLayout } from '../../components/student/StudentLayout';
import { LearningResources } from '../../components/student/LearningResources';
import { PracticeExercises } from '../../components/student/PracticeExercises';
import { ProgressTracking } from '../../components/student/ProgressTracking';
export default function StudentPortal() {
    return (_jsx(StudentLayout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(StudentDashboard, {}) }), _jsx(Route, { path: "/resources", element: _jsx(LearningResources, {}) }), _jsx(Route, { path: "/exercises", element: _jsx(PracticeExercises, {}) }), _jsx(Route, { path: "/progress", element: _jsx(ProgressTracking, {}) })] }) }));
}
