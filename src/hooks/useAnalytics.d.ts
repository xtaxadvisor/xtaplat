export declare function useAnalytics(timeRange: string): {
    metrics: any;
    revenueData: any;
    clientGrowth: any;
    performanceMetrics: any;
    isLoading: any;
    exportAnalytics: (format: "pdf" | "csv" | "excel") => Promise<void>;
};
