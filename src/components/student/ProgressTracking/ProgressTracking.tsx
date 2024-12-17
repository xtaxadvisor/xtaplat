import React from 'react';
import { ProgressHeader } from './ProgressHeader';
import { ProgressMetrics } from './ProgressMetrics';
import { ProgressChart } from './ProgressChart';
import { AchievementList } from './AchievementList';

export function ProgressTracking() {
  return (
    <div className="space-y-6">
      <ProgressHeader />
      <ProgressMetrics />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProgressChart />
        <AchievementList />
      </div>
    </div>
  );
}