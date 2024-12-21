export function calculateYearOverYear(current, previous) {
    const change = ((current - previous) / previous) * 100;
    return {
        current,
        previous,
        absoluteChange: current - previous,
        percentageChange: change,
        trend: change > 0 ? 'up' : change < 0 ? 'down' : 'stable'
    };
}
export function calculatePerformanceScore(metrics, weights) {
    let totalScore = 0;
    let totalWeight = 0;
    Object.entries(metrics).forEach(([key, value]) => {
        const weight = weights[key] || 1;
        totalScore += value * weight;
        totalWeight += weight;
    });
    return totalWeight > 0 ? (totalScore / totalWeight) : 0;
}
export function rankMetrics(metrics, order = 'desc') {
    return metrics
        .sort((a, b) => order === 'desc' ? b.value - a.value : a.value - b.value)
        .map((metric, index) => ({
        ...metric,
        rank: index + 1
    }));
}
