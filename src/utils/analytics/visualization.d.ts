import type { ChartDataset } from 'chart.js';
import type { TimeSeriesData } from '../../types/analytics';
export declare function prepareTimeSeriesData(data: TimeSeriesData[], options?: {
    smoothing?: boolean;
    fillGaps?: boolean;
    formatDate?: (date: string) => string;
}): ChartDataset[];
export declare function calculateChartDimensions(containerWidth: number, aspectRatio?: number): {
    width: number;
    height: number;
};
