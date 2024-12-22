interface MetricBreakdownProps {
    data: Array<{
        label: string;
        value: number;
        color: string;
    }>;
    title: string;
}
export declare function MetricBreakdown({ data, title }: MetricBreakdownProps): any;
export {};
