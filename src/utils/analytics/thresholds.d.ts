import type { MetricThreshold } from '../../types/analytics';
export declare function checkThresholdViolation(value: number, threshold: MetricThreshold): 'normal' | 'warning' | 'critical';
export declare function getThresholdColor(status: 'normal' | 'warning' | 'critical'): string;
export declare function calculateMetricStatus(metrics: PerformanceEntry): Record<string, 'normal' | 'warning' | 'critical'>;
