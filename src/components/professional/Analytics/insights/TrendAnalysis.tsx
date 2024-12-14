import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatPercentage } from '../../../../utils/analytics/metrics';

interface TrendData {
  metric: string;
  current: number;
  previous: number;
  target: number;
}

interface TrendAnalysisProps {
  data: TrendData[];
}

export function TrendAnalysis({ data }: TrendAnalysisProps) {
  return (
    <div className="space-y-4">
      {data.map((item) => {
        const change = ((item.current - item.previous) / item.previous) * 100;
        const isPositive = change > 0;
        
        return (
          <div key={item.metric} className="bg-white rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">{item.metric}</span>
              <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {isPositive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                {formatPercentage(change)}
              </div>
            </div>
            <div className="mt-2">
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className={`h-2 rounded-full ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}
                  style={{ width: `${(item.current / item.target) * 100}%` }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}