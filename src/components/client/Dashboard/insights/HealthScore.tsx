import React from 'react';
import { HealthMetric } from '../../../../types/client';

interface HealthScoreProps {
  score: number;
  metrics: HealthMetric[];
}

export function HealthScore({ score, metrics }: HealthScoreProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Financial Health Score</h3>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded-full">
            <div 
              className="h-4 bg-green-500 rounded-full" 
              style={{ width: `${score}%` }} 
            />
          </div>
        </div>
        <span className="ml-4 text-2xl font-bold text-green-500">{score}/100</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <div key={metric.name} className="text-center">
            <div className="text-sm font-medium text-gray-500">{metric.name}</div>
            <div className="text-lg font-semibold text-gray-900">{metric.score}/100</div>
          </div>
        ))}
      </div>
    </div>
  );
}