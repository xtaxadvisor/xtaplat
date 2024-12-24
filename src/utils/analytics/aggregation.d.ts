import type { TimeSeriesData } from '../../types/analytics';
export declare function aggregateTimeSeries(data: Array<{
    date: string;
    value: number;
}>, interval?: 'day' | 'week' | 'month'): TimeSeriesData;
export declare function calculateMovingAverage(data: number[], windowSize?: number): number[];
