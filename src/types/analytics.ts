export interface AnalyticsInsight {
  type: 'positive' | 'negative' | 'warning';
  metric: string;
  message: string;
  priority: 'high' | 'medium' | 'low';
}

export interface MetricData {
  label: string;
  current: number;
  previous: number;
  target: number;
  history: Array<{ date: string; value: number }>;
}

export interface TimeSeriesData {
  label: string;
  data: Array<{ date: string; value: number }>;
  color: string;
}

export interface ChartOptions {
  aspectRatio?: number;
  smoothing?: boolean;
  fillGaps?: boolean;
  showLegend?: boolean;
  showTooltips?: boolean;
}