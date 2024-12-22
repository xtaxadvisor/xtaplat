import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TrendingUp, Users, DollarSign } from 'lucide-react';
import { LineChart } from '../charts/LineChart';
import { Card } from '../../ui/Card';
export function AdvancedMetrics() {
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Revenue Forecast" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6", children: [_jsx(Card, { icon: TrendingUp, title: "Projected Growth", value: "+15.2%", description: "Next Quarter" }), _jsx(Card, { icon: Users, title: "Client Retention", value: "94%", description: "Predicted Rate" }), _jsx(Card, { icon: DollarSign, title: "Revenue Target", value: "$125K", description: "67% Probability" })] }), _jsx(LineChart, {})] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx("div", { className: "bg-white rounded-lg shadow p-6", children: _jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Client Segments" }) }), _jsx("div", { className: "bg-white rounded-lg shadow p-6", children: _jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Service Performance" }) })] })] }));
}
