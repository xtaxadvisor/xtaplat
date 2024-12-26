import { startOfDay, endOfDay, eachDayOfInterval } from 'date-fns';
export function aggregateTimeSeries(data, interval = 'day') {
    const grouped = data.reduce((acc, item) => {
        const key = startOfDay(new Date(item.date)).toISOString();
        acc[key] = (acc[key] || 0) + item.value;
        return acc;
    }, {});
    // Fill gaps
    const start = startOfDay(new Date(data[0].date));
    const end = endOfDay(new Date(data[data.length - 1].date));
    const allDays = eachDayOfInterval({ start, end });
    return {
        label: 'Time Series',
        data: allDays.map(date => ({
            date: date.toISOString(),
            value: grouped[date.toISOString()] || 0
        })),
        color: '#000000' // You can set the color as needed
    };
}
export function calculateMovingAverage(data, windowSize = 7) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
        const start = Math.max(0, i - windowSize + 1);
        const window = data.slice(start, i + 1);
        const average = window.reduce((a, b) => a + b, 0) / window.length;
        result.push(average);
    }
    return result;
}
