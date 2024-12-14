import React from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';
import { Card } from '../../../ui/Card';

export function PredictiveMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card
        icon={TrendingUp}
        title="Projected Growth"
        value="+15.2%"
        description="Next Quarter"
      />
      <Card
        icon={Users}
        title="Client Retention"
        value="94%"
        description="Predicted Rate"
      />
      <Card
        icon={DollarSign}
        title="Revenue Target"
        value="$125K"
        description="67% Probability"
      />
    </div>
  );
}