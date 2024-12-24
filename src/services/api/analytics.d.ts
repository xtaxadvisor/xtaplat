export interface AnalyticsMetrics {
    revenue: {
        value: number;
        change: number;
    };
    clients: {
        value: number;
        change: number;
    };
    responseTime: {
        value: number;
        change: number;
    };
    satisfaction: {
        value: number;
        change: number;
    };
}
export declare const analyticsService: {
    getAnalytics: (timeRange: string) => Promise<AnalyticsMetrics>;
    exportAnalytics: (timeRange: string) => Promise<Blob>;
    getRevenueData: (timeRange: string) => Promise<{
        date: string;
        value: number;
    }[]>;
    getClientGrowth: (timeRange: string) => Promise<{
        date: string;
        value: number;
    }[]>;
};
