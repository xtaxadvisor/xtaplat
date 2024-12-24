import type { AnalyticsInsight, MetricData } from '../../types/analytics';
export declare function generateInsights(metrics: MetricData[]): AnalyticsInsight[];
export declare function identifyAnomalies(data: number[], threshold?: number): number[];
