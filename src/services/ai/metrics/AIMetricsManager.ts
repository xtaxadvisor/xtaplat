export class AIMetricsManager {
  private metrics = {
    totalRequests: 0,
    averageResponseTime: 0,
    errorRate: 0
  };

  incrementRequests(): void {
    this.metrics.totalRequests++;
  }

  updateMetrics(duration: number, success: boolean): void {
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