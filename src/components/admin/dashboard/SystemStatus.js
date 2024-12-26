import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Server, Database, Cloud, Globe } from 'lucide-react';
export function SystemStatus() {
    const services = [
        {
            name: 'API Server',
            status: 'Operational',
            uptime: '99.9%',
            icon: Server,
            health: 'good'
        },
        {
            name: 'Database',
            status: 'Operational',
            uptime: '99.8%',
            icon: Database,
            health: 'good'
        },
        {
            name: 'Storage',
            status: 'Operational',
            uptime: '99.9%',
            icon: Cloud,
            health: 'good'
        },
        {
            name: 'CDN',
            status: 'Operational',
            uptime: '99.9%',
            icon: Globe,
            health: 'good'
        }
    ];
    return (_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "System Status" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: services.map((service) => (_jsx("div", { className: "bg-gray-50 rounded-lg p-4", children: _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(service.icon, { className: "h-6 w-6 text-gray-400" }), _jsxs("div", { children: [_jsx("h4", { className: "text-sm font-medium text-gray-900", children: service.name }), _jsxs("div", { className: "flex items-center mt-1", children: [_jsx("div", { className: `h-2 w-2 rounded-full ${service.health === 'good' ? 'bg-green-500' : 'bg-red-500'}` }), _jsx("span", { className: "ml-2 text-sm text-gray-500", children: service.status })] }), _jsxs("p", { className: "text-xs text-gray-400 mt-1", children: ["Uptime: ", service.uptime] })] })] }) }, service.name))) })] }));
}
