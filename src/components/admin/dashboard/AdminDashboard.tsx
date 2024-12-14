import React from 'react';
import { Users, FileText, Clock, TrendingUp } from 'lucide-react';
import { Card } from '../../ui/Card';
import { AdminMetrics } from './AdminMetrics';
import { RecentActivity } from './RecentActivity';
import { SystemStatus } from './SystemStatus';

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
          icon={FileText}
          title="Total Documents"
          value="5,678"
          description="142 pending review"
        />
        <Card
          icon={Clock}
          title="Average Response"
          value="2.5h"
          description="15% faster than last week"
        />
        <Card
          icon={TrendingUp}
          title="System Health"
          value="98.5%"
          description="All systems operational"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdminMetrics />
        <RecentActivity />
      </div>

      <SystemStatus />
    </div>
  );
}