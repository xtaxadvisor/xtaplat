import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Book, Video, Award, FileText } from 'lucide-react';
import { formatTimeAgo } from '../../../utils/date';
export function RecentActivities() {
    const activities = [
        {
            id: 1,
            type: 'course',
            title: 'Completed Chapter 3: Tax Planning Basics',
            timestamp: '2024-03-19T10:30:00Z',
            icon: Book
        },
        {
            id: 2,
            type: 'video',
            title: 'Watched Investment Strategies Workshop',
            timestamp: '2024-03-19T09:15:00Z',
            icon: Video
        },
        {
            id: 3,
            type: 'certificate',
            title: 'Earned Basic Financial Planning Certificate',
            timestamp: '2024-03-18T16:45:00Z',
            icon: Award
        },
        {
            id: 4,
            type: 'assignment',
            title: 'Submitted Tax Analysis Assignment',
            timestamp: '2024-03-18T14:20:00Z',
            icon: FileText
        }
    ];
    return (_jsx("div", { className: "space-y-4", children: activities.map((activity) => (_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center", children: _jsx(activity.icon, { className: "h-4 w-4 text-blue-600" }) }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "text-sm font-medium text-gray-900", children: activity.title }), _jsx("p", { className: "text-sm text-gray-500", children: formatTimeAgo(activity.timestamp) })] })] }, activity.id))) }));
}
