interface MetricData {
    label: string;
    value: number;
    target: number;
    change: number;
}
interface PerformanceMetricsProps {
    data: MetricData[];
}
export declare function PerformanceMetrics({ data }: PerformanceMetricsProps): any;
export {};
