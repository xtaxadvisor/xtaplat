import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { formatPercentage } from '../../../../utils/analytics/metrics';

interface MetricBreakdownProps {
  data: Array<{
    label: string;
    value: number;
    color: string;
  }>;
  title: string;
}

export function MetricBreakdown({ data, title }: MetricBreakdownProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  const chartData = {
    labels: data.map(d => d.label),
    datasets: [{
      data: data.map(d => d.value),
      backgroundColor: data.map(d => d.color),
      borderWidth: 0
    }]
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    }
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <div className="relative" style={{ height: '240px' }}>
        <Doughnut data={chartData} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">{total}</div>
            <div className="text-sm text-gray-500">Total</div>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {data.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <div className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600">{item.label}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {formatPercentage((item.value / total) * 100)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}