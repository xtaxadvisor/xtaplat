export class AIMetricsManager {
    metrics = {
        totalRequests: 0,
        averageResponseTime: 0,
        errorRate: 0
    };
    incrementRequests() {
        this.metrics.totalRequests++;
    }
    updateMetrics(duration, success) {
        const { totalRequests, averageResponseTime } = this.metrics;
        this.metrics.averageResponseTime =
            (averageResponseTime * (totalRequests - 1) + duration) / totalRequests;
        if (!success) {
            this.metrics.errorRate =
                (this.metrics.errorRate * (totalRequests - 1) + 1) / totalRequests;
        }
    }
    getMetrics() {
        return { ...this.metrics };
    }
}
