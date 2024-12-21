export function calculateGrowthRate(current, previous) {
    return ((current - previous) / previous) * 100;
}
export function formatPercentage(value) {
    return `${value.toFixed(1)}%`;
}
export function calculateHealthScore(metrics) {
    return Math.round(metrics.reduce((sum, value) => sum + value, 0) / metrics.length);
}
