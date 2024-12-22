import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Download, Calendar } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Select } from '../../ui/Select';
import { MetricsGrid } from './MetricsGrid';
import { RevenueChart } from './RevenueChart';
import { ClientGrowthChart } from './ClientGrowthChart';
import { PerformanceMetrics } from './PerformanceMetrics';
import { useAnalytics } from '../../../hooks/useAnalytics';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
export function AnalyticsDashboard() {
    const [timeRange, setTimeRange] = useState('month');
    const { metrics, revenueData, clientGrowth, performanceMetrics, isLoading, exportAnalytics } = useAnalytics(timeRange);
    if (isLoading) {
        return _jsx(LoadingSpinner, {});
    }
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Analytics Dashboard" }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Calendar, { className: "h-5 w-5 text-gray-400" }), _jsx(Select, { options: [
                                            { value: 'week', label: 'This Week' },
                                            { value: 'month', label: 'This Month' },
                                            { value: 'quarter', label: 'This Quarter' },
                                            { value: 'year', label: 'This Year' }
                                        ], value: timeRange, onChange: setTimeRange })] }), _jsxs("div", { className: "flex space-x-2", children: [_jsx(Button, { variant: "outline", size: "sm", icon: Download, onClick: () => exportAnalytics('pdf'), children: "PDF" }), _jsx(Button, { variant: "outline", size: "sm", icon: Download, onClick: () => exportAnalytics('csv'), children: "CSV" }), _jsx(Button, { variant: "outline", size: "sm", icon: Download, onClick: () => exportAnalytics('excel'), children: "Excel" })] })] })] }), _jsx(MetricsGrid, { metrics: metrics }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Revenue Trends" }), _jsx(RevenueChart, { data: revenueData })] }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Client Growth" }), _jsx(ClientGrowthChart, { data: clientGrowth })] })] }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Performance Metrics" }), _jsx(PerformanceMetrics, { data: performanceMetrics })] })] }));
}
