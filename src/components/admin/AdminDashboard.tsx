import React from 'react';
import { Users, Settings, FileText, Shield, TrendingUp, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '../ui/Card';

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          icon={Users}
          title="Total Users"
          value="1,234"
          description="24 new this week"
        />
        <Card
          icon={Shield}
          title="Security Status"
          value="Secure"
          description="All systems operational"
        />
        <Card
          icon={FileText}
          title="Total Documents"
          value="5,678"
          description="142 pending review"
        />
        <Card
          icon={Settings}
          title="System Health"
          value="98.5%"
          description="Optimal performance"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'User Created', details: 'New professional account', time: '2 hours ago' },
              { action: 'Settings Updated', details: 'Security policy change', time: '4 hours ago' },
              { action: 'System Backup', details: 'Automatic backup completed', time: '6 hours ago' }
            ].map((activity, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.details}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
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
            ].map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">{metric.metric}</span>
                  <span className="text-sm font-medium text-gray-900">{metric.value}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: metric.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}