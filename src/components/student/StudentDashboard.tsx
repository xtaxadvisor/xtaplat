import React from 'react';
import { Book, Clock, Award, TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';
import { ProgressChart } from './dashboard/ProgressChart';
import { RecentActivities } from './dashboard/RecentActivities';
import { UpcomingAssignments } from './dashboard/UpcomingAssignments';

export function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          icon={Book}
          title="Courses Enrolled"
          value="4"
          description="2 in progress"
        />
        <Card
          icon={Clock}
          title="Study Hours"
          value="32.5"
          description="This month"
        />
        <Card
          icon={Award}
          title="Certifications"
          value="2"
          description="1 in progress"
        />
        <Card
          icon={TrendingUp}
          title="Overall Progress"
          value="78%"
          description="+12% this month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Learning Progress</h2>
          <ProgressChart />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activities</h2>
          <RecentActivities />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Assignments</h2>
        <UpcomingAssignments />
      </div>
    </div>
  );
}