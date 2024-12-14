import React from 'react';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
import { Card } from '../../ui/Card';
import { LoadingSpinner } from '../../ui/LoadingSpinner';

interface MetricsGridProps {
  metrics: {
    revenue: { value: number; change: number };
    clients: { value: number; change: number };
    responseTime: { value: number; change: number };
    satisfaction: { value: number; change: number };
  } | null;
  isLoading: boolean;
}

export function MetricsGrid({ metrics, isLoading }: MetricsGridProps) {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!metrics) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Card
        icon={DollarSign}
        title="Revenue"
        value={`$${metrics.revenue.value.toLocaleString()}`}
        description={
          <span className={`flex items-center ${metrics.revenue.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <TrendingUp className="h-4 w-4 mr-1" />
            {Math.abs(metrics.revenue.change)}% {metrics.revenue.change >= 0 ? 'increase' : 'decrease'}
          </span>
        }
      />
      <Card
        icon={Users}
        title="Active Clients"
        value={metrics.clients.value}
        description={
          <span className={`flex items-center ${metrics.clients.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <TrendingUp className="h-4 w-4 mr-1" />
            {Math.abs(metrics.clients.change)}% {metrics.clients.change >= 0 ? 'increase' : 'decrease'}
          </span>
        }
      />
      <Card
        icon={Clock}
        title="Avg. Response Time"
        value={`${metrics.responseTime.value}h`}
        description={
          <span className={`flex items-center ${metrics.responseTime.change <= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <TrendingUp className="h-4 w-4 mr-1" />
            {Math.abs(metrics.responseTime.change)}% {metrics.responseTime.change <= 0 ? 'improvement' : 'increase'}
          </span>
        }
      />
      <Card
        icon={TrendingUp}
        title="Client Satisfaction"
        value={`${metrics.satisfaction.value}%`}
        description={
          <span className={`flex items-center ${metrics.satisfaction.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <TrendingUp className="h-4 w-4 mr-1" />
            {Math.abs(metrics.satisfaction.change)}% {metrics.satisfaction.change >= 0 ? 'increase' : 'decrease'}
          </span>
        }
      />
    </div>
  );
}