import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BarChart } from '../charts/BarChart';
import { LineChart } from '../charts/LineChart';
export function AdminMetrics() {
    return (_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "System Metrics" }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-sm font-medium text-gray-500 mb-2", children: "User Growth" }), _jsx(LineChart, {})] }), _jsxs("div", { children: [_jsx("h4", { className: "text-sm font-medium text-gray-500 mb-2", children: "Resource Usage" }), _jsx(BarChart, {})] })] })] }));
}
