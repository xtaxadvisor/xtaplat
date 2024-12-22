import React from 'react';
import { Award, TrendingUp, BookOpen, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { ProgressChart } from './dashboard/ProgressChart';

export function ProgressTracking() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Progress Tracking</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          icon={Award}
          title="Total Points"
          value="450"
          description="+50 this week"
        />
        <Card
          icon={BookOpen}
          title="Completed Exercises"
          value="12"
          description="75% completion rate"
        />
        <Card
          icon={TrendingUp}
          title="Current Streak"
          value="5 days"
          description="Personal best: 7 days"
        />
        <Card
          icon={CheckCircle}
          title="Achievements"
          value="8/15"
          description="3 new this month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Learning Progress</h2>
          <ProgressChart />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Achievements</h2>
          <div className="space-y-4">
            {[
              { name: 'Tax Master', description: 'Complete 5 tax calculation exercises', date: '2 days ago' },
              { name: 'Quick Learner', description: 'Finish 3 exercises in one day', date: '5 days ago' },
              { name: 'Perfect Score', description: 'Score 100% on an advanced exercise', date: '1 week ago' }
            ].map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Award className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{achievement.name}</p>
                  <p className="text-sm text-gray-500">{achievement.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}