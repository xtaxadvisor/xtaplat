import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Users, FileText, Clock, TrendingUp } from 'lucide-react';
import { Card } from '../../ui/Card';
import { AdminMetrics } from './AdminMetrics';
import { RecentActivity } from './RecentActivity';
import { SystemStatus } from './SystemStatus';
export function AdminDashboard() {
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("div", { className: "flex justify-between items-center", children: _jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Admin Dashboard" }) }), _jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [_jsx(Card, { icon: Users, title: "Total Users", value: "1,234", description: "24 new this week" }), _jsx(Card, { icon: FileText, title: "Total Documents", value: "5,678", description: "142 pending review" }), _jsx(Card, { icon: Clock, title: "Average Response", value: "2.5h", description: "15% faster than last week" }), _jsx(Card, { icon: TrendingUp, title: "System Health", value: "98.5%", description: "All systems operational" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsx(AdminMetrics, {}), _jsx(RecentActivity, {})] }), _jsx(SystemStatus, {})] }));
}
