import type { MetricThreshold, PerformanceMetrics } from '../../types/analytics';

export function checkThresholdViolation(
  value: number,
  threshold: MetricThreshold
): 'normal' | 'warning' | 'critical' {
  if (value >= threshold.critical) return 'critical';
  if (value >= threshold.warning) return 'warning';
  return 'normal';
}

export function getThresholdColor(status: 'normal' | 'warning' | 'critical'): string {
  switch (status) {
    case 'critical':
      return 'text-red-600';
    case 'warning':
      return 'text-yellow-600';
    default:
      return 'text-green-600';
  }
}

export function calculateMetricStatus(
  metrics: PerformanceMetrics
): Record<string, 'normal' | 'warning' | 'critical'> {
  return Object.entries(metrics).reduce((acc, [key, metric]) => ({
    ...acc,
    [key]: checkThresholdViolation(metric.current, metric.thresholds)
  }), {});
}