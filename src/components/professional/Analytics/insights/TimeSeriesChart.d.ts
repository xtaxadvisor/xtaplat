interface TimeSeriesData {
    label: string;
    data: Array<{
        date: string;
        value: number;
    }>;
    color: string;
}
interface TimeSeriesChartProps {
    series: TimeSeriesData[];
    height?: number;
}
export declare function TimeSeriesChart({ series, height }: TimeSeriesChartProps): any;
export {};
