import type { MetricComparison } from '../../types/analytics';

export function calculateYearOverYear(
  current: number,
  previous: number
): MetricComparison {
  const change = ((current - previous) / previous) * 100;
  
  return {
    current,
    previous,
    absoluteChange: current - previous,
    percentageChange: change,
    trend: change > 0 ? 'up' : change < 0 ? 'down' : 'stable'
  };
}

export function calculatePerformanceScore(
  metrics: Record<string, number>,
  weights: Record<string, number>
): number {
  let totalScore = 0;
  let totalWeight = 0;
  
  Object.entries(metrics).forEach(([key, value]) => {
    const weight = weights[key] || 1;
    totalScore += value * weight;
    totalWeight += weight;
  });
  
  return totalWeight > 0 ? (totalScore / totalWeight) : 0;
}

export function rankMetrics(
  metrics: Array<{ name: string; value: number }>,
  order: 'asc' | 'desc' = 'desc'
): Array<{ name: string; value: number; rank: number }> {
  return metrics
    .sort((a, b) => order === 'desc' ? b.value - a.value : a.value - b.value)
    .map((metric, index) => ({
      ...metric,
      rank: index + 1
    }));
}