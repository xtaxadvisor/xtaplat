import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { formatPercentage } from '../../../../utils/analytics/metrics';

interface ComparisonMetric {
  label: string;
  current: number;
  previous: number;
  target: number;
  unit: string;
}

interface MetricComparisonProps {
  metrics: ComparisonMetric[];
}

export function MetricComparison({ metrics }: MetricComparisonProps) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => {
        const change = ((metric.current - metric.previous) / metric.previous) * 100;
        const progress = (metric.current / metric.target) * 100;
        
        return (
          <div key={metric.label} className="bg-white rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-medium text-gray-500">{metric.label}</span>
              <div className={`flex items-center ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {change >= 0 ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                <span className="ml-1 text-sm font-medium">{formatPercentage(Math.abs(change))}</span>
              </div>
            </div>
            <div className="mt-1">
              <span className="text-2xl font-bold text-gray-900">
                {metric.current}{metric.unit}
              </span>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 rounded-full bg-blue-600"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <div className="mt-1 text-xs text-gray-500">
                Target: {metric.target}{metric.unit}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}