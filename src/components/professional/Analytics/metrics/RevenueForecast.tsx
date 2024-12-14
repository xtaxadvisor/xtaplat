import React from 'react';
import { LineChart } from '../../charts/LineChart';
import { PredictiveMetrics } from './PredictiveMetrics';

export function RevenueForecast() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Forecast</h3>
      <PredictiveMetrics />
      <div className="mt-6">
        <LineChart />
      </div>
    </div>
  );
}