export function calculateGrowthRate(current: number, previous: number): number {
  return ((current - previous) / previous) * 100;
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function calculateHealthScore(metrics: number[]): number {
  return Math.round(metrics.reduce((sum, value) => sum + value, 0) / metrics.length);
}