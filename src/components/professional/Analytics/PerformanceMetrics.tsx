import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MetricData {
  label: string;
  value: number;
  target: number;
  change: number;
}

interface PerformanceMetricsProps {
  data: MetricData[];
}

export function PerformanceMetrics({ data }: PerformanceMetricsProps) {
  return (
    <div className="space-y-6">
      {data?.map((metric, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">{metric.label}</h4>
            <div className="mt-1 flex items-center">
              <span className="text-2xl font-semibold text-gray-900">
                {metric.value}%
              </span>
              <span className="ml-2 text-sm text-gray-500">
                of {metric.target}% target
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-48 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${(metric.value / metric.target) * 100}%` }}
              />
            </div>
            <span className={`flex items-center text-sm ${
              metric.change >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {metric.change >= 0 ? (
                <ArrowUpRight className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDownRight className="h-4 w-4 mr-1" />
              )}
              {Math.abs(metric.change)}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}