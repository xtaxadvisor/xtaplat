import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Activity, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { aiManager } from '../../services/ai/AIManager';
import { Card } from '../ui/Card';
export function AIMonitor() {
    const [metrics, setMetrics] = React.useState(aiManager.getMetrics());
    const [history, setHistory] = React.useState(aiManager.getHistory());
    React.useEffect(() => {
        const interval = setInterval(() => {
            setMetrics(aiManager.getMetrics());
            setHistory(aiManager.getHistory());
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "AI System Monitor" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsx(Card, { icon: Activity, title: "Total Requests", value: metrics.totalRequests.toString(), description: "Total AI interactions" }), _jsx(Card, { icon: Clock, title: "Average Response Time", value: `${Math.round(metrics.averageResponseTime)}ms`, description: "Response latency" }), _jsx(Card, { icon: AlertCircle, title: "Error Rate", value: `${(metrics.errorRate * 100).toFixed(2)}%`, description: "Failed requests" })] }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Recent Interactions" }), _jsx("div", { className: "space-y-4", children: history.map((message, index) => (_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: `flex-shrink-0 ${message.role === 'user' ? 'bg-blue-100' : 'bg-green-100'} rounded-full p-2`, children: message.role === 'user' ? (_jsx(Activity, { className: "h-5 w-5 text-blue-600" })) : (_jsx(CheckCircle, { className: "h-5 w-5 text-green-600" })) }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-sm font-medium text-gray-900", children: message.role === 'user' ? 'User' : 'AI Assistant' }), _jsx("p", { className: "text-sm text-gray-600", children: message.content })] })] }, index))) })] })] }));
}
