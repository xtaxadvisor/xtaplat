import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface Metric {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down';
}

interface PerformanceMetricsProps {
  metrics: Metric[];
}

export function PerformanceMetrics({ metrics }: PerformanceMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">{metric.label}</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{metric.value}</p>
          <div className="mt-2 flex items-center">
            {metric.trend === 'up' ? (
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-red-500" />
            )}
            <span
              className={`text-sm ${
                metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {metric.change}% from last period
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}