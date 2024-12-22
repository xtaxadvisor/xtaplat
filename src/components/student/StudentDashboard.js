import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Book, Clock, Award, TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';
import { ProgressChart } from './dashboard/ProgressChart';
import { RecentActivities } from './dashboard/RecentActivities';
import { UpcomingAssignments } from './dashboard/UpcomingAssignments';
export function StudentDashboard() {
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [_jsx(Card, { icon: Book, title: "Courses Enrolled", value: "4", description: "2 in progress" }), _jsx(Card, { icon: Clock, title: "Study Hours", value: "32.5", description: "This month" }), _jsx(Card, { icon: Award, title: "Certifications", value: "2", description: "1 in progress" }), _jsx(Card, { icon: TrendingUp, title: "Overall Progress", value: "78%", description: "+12% this month" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Learning Progress" }), _jsx(ProgressChart, {})] }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Recent Activities" }), _jsx(RecentActivities, {})] })] }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Upcoming Assignments" }), _jsx(UpcomingAssignments, {})] })] }));
}
