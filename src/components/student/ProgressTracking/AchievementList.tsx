import React from 'react';
import { Award } from 'lucide-react';

export function AchievementList() {
  const achievements = [
    { name: 'Tax Master', description: 'Complete 5 tax calculation exercises', date: '2 days ago' },
    { name: 'Quick Learner', description: 'Finish 3 exercises in one day', date: '5 days ago' },
    { name: 'Perfect Score', description: 'Score 100% on an advanced exercise', date: '1 week ago' }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Achievements</h2>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
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
  );
}