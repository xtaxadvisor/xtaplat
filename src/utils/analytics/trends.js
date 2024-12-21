export function calculateTrend(history) {
    if (history.length < 2)
        return 0;
    const latest = history[history.length - 1].value;
    const previous = history[history.length - 2].value;
    return ((latest - previous) / previous) * 100;
}
export function analyzeTrend(current, previous, threshold = 5) {
    const change = ((current - previous) / previous) * 100;
    return {
        value: current,
        change,
        direction: change > threshold ? 'up' : change < -threshold ? 'down' : 'stable',
        strength: Math.abs(change) > 20 ? 'strong' :
            Math.abs(change) > 10 ? 'moderate' : 'weak'
    };
}
export function predictTrend(history) {
    if (history.length < 3)
        return 0;
    // Simple linear regression
    const n = history.length;
    const x = Array.from({ length: n }, (_, i) => i);
    const y = history.map(h => h.value);
    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
    const sumXX = x.reduce((sum, xi) => sum + xi * xi, 0);
    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    return slope;
}
