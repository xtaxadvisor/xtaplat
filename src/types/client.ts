export interface HealthMetric {
  name: string;
  score: number;
  trend?: 'up' | 'down' | 'stable';
}

export interface FinancialHealth {
  score: number;
  metrics: HealthMetric[];
  lastUpdated: string;
}