import { format } from 'date-fns';
export function prepareTimeSeriesData(data, options = {}) {
    const { smoothing = false, fillGaps = true, formatDate = (date) => format(new Date(date), 'MMM d') } = options;
    return data.map(series => ({
        label: series.label,
        data: series.data.map(d => ({
            x: new Date(formatDate(d.date)).getTime(),
            y: d.value
        })),
        borderColor: series.color,
        backgroundColor: `${series.color}20`,
        fill: true,
        tension: smoothing ? 0.4 : 0,
        spanGaps: fillGaps
    }));
}
export function calculateChartDimensions(containerWidth, aspectRatio = 2) {
    const height = containerWidth / aspectRatio;
    return { width: containerWidth, height };
}
