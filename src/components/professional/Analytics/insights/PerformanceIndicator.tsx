import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { calculateTrend } from '../../../../utils/analytics/trends';
import type { PerformanceData } from '../../../../types/analytics';

interface PerformanceIndicatorProps {
  data: PerformanceData;
  threshold: number;
}

export function PerformanceIndicator({ data, threshold }: PerformanceIndicatorProps) {
  const trend = calculateTrend(data.history);
  const isPositive = trend >= 0;
  const isAboveThreshold = data.current >= threshold;

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-500">{data.label}</span>
        <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? (
            <TrendingUp className="h-4 w-4 mr-1" />
          ) : (
            <TrendingDown className="h-4 w-4 mr-1" />
          )}
          <span className="text-sm font-medium">{Math.abs(trend)}%</span>
        </div>
      </div>
      <div className="mt-1">
        <div className="flex items-end">
          <span className="text-2xl font-bold text-gray-900">{data.current}</span>
          <span className="ml-2 text-sm text-gray-500">/ {threshold}</span>
        </div>
        <div className="mt-2">
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className={`h-2 rounded-full ${isAboveThreshold ? 'bg-green-500' : 'bg-yellow-500'}`}
              style={{ width: `${Math.min((data.current / threshold) * 100, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}