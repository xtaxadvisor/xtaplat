import type { AnalyticsInsight, MetricData } from '../../types/analytics';
import { analyzeTrend } from './trends';

export function generateInsights(metrics: MetricData[]): AnalyticsInsight[] {
  const insights: AnalyticsInsight[] = [];

  metrics.forEach(metric => {
    const trend = analyzeTrend(metric.current, metric.previous);
    
    if (trend.strength === 'strong') {
      insights.push({
        type: trend.direction === 'up' ? 'positive' : 'negative',
        metric: metric.label,
        message: `${metric.label} has ${trend.direction === 'up' ? 'increased' : 'decreased'} significantly by ${Math.abs(trend.change)}%`,
        priority: 'high'
      });
    }

    if (metric.current < metric.target * 0.8) {
      insights.push({
        type: 'warning',
        metric: metric.label,
        message: `${metric.label} is significantly below target (${Math.round((metric.current / metric.target) * 100)}% of target)`,
        priority: 'medium'
      });
    }
  });

  return insights.sort((a, b) => 
    b.priority === 'high' ? 1 : a.priority === 'high' ? -1 : 0
  );
}

export function identifyAnomalies(
  data: number[],
  threshold: number = 2
): number[] {
  const mean = data.reduce((a, b) => a + b, 0) / data.length;
  const stdDev = Math.sqrt(
    data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / data.length
  );
  
  return data.map((value, index) => 
    Math.abs(value - mean) > threshold * stdDev ? index : -1
  ).filter(index => index !== -1);
}