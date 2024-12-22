export declare function useReports(): {
    dateRange: any;
    setDateRange: any;
    reportType: any;
    setReportType: any;
    metrics: any;
    revenueData: any;
    clientGrowth: any;
    isLoading: any;
    exportReport: (format: "pdf" | "csv" | "email") => Promise<void>;
};
