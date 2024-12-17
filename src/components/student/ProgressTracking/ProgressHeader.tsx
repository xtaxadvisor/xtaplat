import React from 'react';
import { Award } from 'lucide-react';

export function ProgressHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Progress Tracking</h1>
        <p className="text-gray-600">Track your learning journey and achievements</p>
      </div>
      <div className="flex items-center space-x-2">
        <Award className="h-6 w-6 text-blue-600" />
        <span className="text-lg font-medium text-gray-900">Level 5</span>
      </div>
    </div>
  );
}