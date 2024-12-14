import React from 'react';
import { FileText, Users, Settings, Shield } from 'lucide-react';

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      action: 'User Created',
      details: 'New professional account registered',
      time: '2 hours ago',
      icon: Users
    },
    {
      id: 2,
      action: 'Settings Updated',
      details: 'System security policy modified',
      time: '4 hours ago',
      icon: Settings
    },
    {
      id: 3,
      action: 'Document Approved',
      details: 'Tax return document approved',
      time: '5 hours ago',
      icon: FileText
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <activity.icon className="h-4 w-4 text-blue-600" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{activity.action}</p>
              <p className="text-sm text-gray-500">{activity.details}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}