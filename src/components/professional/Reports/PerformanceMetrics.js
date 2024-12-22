import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
export function PerformanceMetrics({ metrics }) {
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: metrics.map((metric, index) => (_jsxs("div", { className: "bg-white p-6 rounded-lg shadow", children: [_jsx("h3", { className: "text-sm font-medium text-gray-500", children: metric.label }), _jsx("p", { className: "mt-2 text-3xl font-semibold text-gray-900", children: metric.value }), _jsxs("div", { className: "mt-2 flex items-center", children: [metric.trend === 'up' ? (_jsx(ArrowUpRight, { className: "h-4 w-4 text-green-500" })) : (_jsx(ArrowDownRight, { className: "h-4 w-4 text-red-500" })), _jsxs("span", { className: `text-sm ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`, children: [metric.change, "% from last period"] })] })] }, index))) }));
}
