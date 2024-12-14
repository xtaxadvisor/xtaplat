import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import type { AnalyticsInsight } from '../../../../types/analytics';

interface InsightCardProps {
  insight: AnalyticsInsight;
}

export function InsightCard({ insight }: InsightCardProps) {
  const getIcon = () => {
    switch (insight.type) {
      case 'positive':
        return <TrendingUp className="h-5 w-5 text-green-500" />;
      case 'negative':
        return <TrendingDown className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getBackgroundColor = () => {
    switch (insight.type) {
      case 'positive':
        return 'bg-green-50 border-green-200';
      case 'negative':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
    }
  };

  return (
    <div className={`rounded-lg p-4 border ${getBackgroundColor()}`}>
      <div className="flex items-start">
        {getIcon()}
        <div className="ml-3">
          <h4 className="text-sm font-medium">{insight.metric}</h4>
          <p className="mt-1 text-sm">{insight.message}</p>
        </div>
      </div>
    </div>
  );
}