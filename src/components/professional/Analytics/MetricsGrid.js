import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
import { Card } from '../../ui/Card';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
export function MetricsGrid({ metrics, isLoading }) {
    if (isLoading) {
        return _jsx(LoadingSpinner, {});
    }
    if (!metrics) {
        return null;
    }
    return (_jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [_jsx(Card, { icon: DollarSign, title: "Revenue", value: `$${metrics.revenue.value.toLocaleString()}`, description: _jsxs("span", { className: `flex items-center ${metrics.revenue.change >= 0 ? 'text-green-600' : 'text-red-600'}`, children: [_jsx(TrendingUp, { className: "h-4 w-4 mr-1" }), Math.abs(metrics.revenue.change), "% ", metrics.revenue.change >= 0 ? 'increase' : 'decrease'] }) }), _jsx(Card, { icon: Users, title: "Active Clients", value: metrics.clients.value, description: _jsxs("span", { className: `flex items-center ${metrics.clients.change >= 0 ? 'text-green-600' : 'text-red-600'}`, children: [_jsx(TrendingUp, { className: "h-4 w-4 mr-1" }), Math.abs(metrics.clients.change), "% ", metrics.clients.change >= 0 ? 'increase' : 'decrease'] }) }), _jsx(Card, { icon: Clock, title: "Avg. Response Time", value: `${metrics.responseTime.value}h`, description: _jsxs("span", { className: `flex items-center ${metrics.responseTime.change <= 0 ? 'text-green-600' : 'text-red-600'}`, children: [_jsx(TrendingUp, { className: "h-4 w-4 mr-1" }), Math.abs(metrics.responseTime.change), "% ", metrics.responseTime.change <= 0 ? 'improvement' : 'increase'] }) }), _jsx(Card, { icon: TrendingUp, title: "Client Satisfaction", value: `${metrics.satisfaction.value}%`, description: _jsxs("span", { className: `flex items-center ${metrics.satisfaction.change >= 0 ? 'text-green-600' : 'text-red-600'}`, children: [_jsx(TrendingUp, { className: "h-4 w-4 mr-1" }), Math.abs(metrics.satisfaction.change), "% ", metrics.satisfaction.change >= 0 ? 'increase' : 'decrease'] }) })] }));
}
