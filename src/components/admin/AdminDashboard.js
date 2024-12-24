<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Users, Settings, FileText, Shield } from 'lucide-react';
import { Card } from '../ui/Card';
export function AdminDashboard() {
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("div", { className: "flex justify-between items-center", children: _jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Admin Dashboard" }) }), _jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [_jsx(Card, { icon: Users, title: "Total Users", value: "1,234", description: "24 new this week" }), _jsx(Card, { icon: Shield, title: "Security Status", value: "Secure", description: "All systems operational" }), _jsx(Card, { icon: FileText, title: "Total Documents", value: "5,678", description: "142 pending review" }), _jsx(Card, { icon: Settings, title: "System Health", value: "98.5%", description: "Optimal performance" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Recent Activity" }), _jsx("div", { className: "space-y-4", children: [
                                    { action: 'User Created', details: 'New professional account', time: '2 hours ago' },
                                    { action: 'Settings Updated', details: 'Security policy change', time: '4 hours ago' },
                                    { action: 'System Backup', details: 'Automatic backup completed', time: '6 hours ago' }
                                ].map((activity, index) => (_jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-900", children: activity.action }), _jsx("p", { className: "text-sm text-gray-500", children: activity.details })] }), _jsx("span", { className: "text-sm text-gray-500", children: activity.time })] }, index))) })] }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "System Metrics" }), _jsx("div", { className: "space-y-4", children: [
                                    { metric: 'CPU Usage', value: '45%' },
                                    { metric: 'Memory Usage', value: '62%' },
                                    { metric: 'Storage', value: '78%' },
                                    { metric: 'Network Load', value: '34%' }
                                ].map((metric, index) => (_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-sm text-gray-600", children: metric.metric }), _jsx("span", { className: "text-sm font-medium text-gray-900", children: metric.value })] }), _jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: _jsx("div", { className: "bg-blue-600 h-2 rounded-full", style: { width: metric.value } }) })] }, index))) })] })] })] }));
=======
import React from 'react';
import { Users, Settings, FileText, Shield } from 'lucide-react';
import { Card } from '../ui/Card';
export function AdminDashboard() {
    return (<div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card icon={Users} title="Total Users" value="1,234" description="24 new this week"/>
        <Card icon={Shield} title="Security Status" value="Secure" description="All systems operational"/>
        <Card icon={FileText} title="Total Documents" value="5,678" description="142 pending review"/>
        <Card icon={Settings} title="System Health" value="98.5%" description="Optimal performance"/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
            { action: 'User Created', details: 'New professional account', time: '2 hours ago' },
            { action: 'Settings Updated', details: 'Security policy change', time: '4 hours ago' },
            { action: 'System Backup', details: 'Automatic backup completed', time: '6 hours ago' }
        ].map((activity, index) => (<div key={index} className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.details}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">System Metrics</h2>
          <div className="space-y-4">
            {[
            { metric: 'CPU Usage', value: '45%' },
            { metric: 'Memory Usage', value: '62%' },
            { metric: 'Storage', value: '78%' },
            { metric: 'Network Load', value: '34%' }
        ].map((metric, index) => (<div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">{metric.metric}</span>
                  <span className="text-sm font-medium text-gray-900">{metric.value}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: metric.value }}/>
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
