import React from 'react';
import { BarChart } from '../charts/BarChart';
import { LineChart } from '../charts/LineChart';

export function AdminMetrics() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">System Metrics</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-2">User Growth</h4>
          <LineChart />
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-2">Resource Usage</h4>
          <BarChart />
        </div>
      </div>
    </div>
  );
}