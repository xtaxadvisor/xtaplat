import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatPercentage } from '../../../../utils/analytics/metrics';
export function TrendAnalysis({ data }) {
    return (_jsx("div", { className: "space-y-4", children: data.map((item) => {
            const change = ((item.current - item.previous) / item.previous) * 100;
            const isPositive = change > 0;
            return (_jsxs("div", { className: "bg-white rounded-lg p-4", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-sm font-medium text-gray-500", children: item.metric }), _jsxs("div", { className: `flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`, children: [isPositive ? _jsx(TrendingUp, { className: "h-4 w-4 mr-1" }) : _jsx(TrendingDown, { className: "h-4 w-4 mr-1" }), formatPercentage(change)] })] }), _jsx("div", { className: "mt-2", children: _jsx("div", { className: "h-2 bg-gray-200 rounded-full", children: _jsx("div", { className: `h-2 rounded-full ${isPositive ? 'bg-green-500' : 'bg-red-500'}`, style: { width: `${(item.current / item.target) * 100}%` } }) }) })] }, item.metric));
        }) }));
}
