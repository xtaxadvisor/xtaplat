import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FileText, Users, Settings } from 'lucide-react';
export function RecentActivity() {
    const activities = [
        {
            id: 1,
            action: 'User Created',
            details: 'New professional account registered',
            time: '2 hours ago',
            icon: Users
        },
        {
            id: 2,
            action: 'Settings Updated',
            details: 'System security policy modified',
            time: '4 hours ago',
            icon: Settings
        },
        {
            id: 3,
            action: 'Document Approved',
            details: 'Tax return document approved',
            time: '5 hours ago',
            icon: FileText
        }
    ];
    return (_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Recent Activity" }), _jsx("div", { className: "space-y-4", children: activities.map((activity) => (_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center", children: _jsx(activity.icon, { className: "h-4 w-4 text-blue-600" }) }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-900", children: activity.action }), _jsx("p", { className: "text-sm text-gray-500", children: activity.details }), _jsx("p", { className: "text-xs text-gray-400 mt-1", children: activity.time })] })] }, activity.id))) })] }));
}
