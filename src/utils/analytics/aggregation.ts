import { startOfDay, endOfDay, eachDayOfInterval } from 'date-fns';
import type { TimeSeriesData } from '../../types/analytics';

export function aggregateTimeSeries(
  data: Array<{ date: string; value: number }>,
  interval: 'day' | 'week' | 'month' = 'day'
): TimeSeriesData {
  const grouped = data.reduce((acc, item) => {
    const key = startOfDay(new Date(item.date)).toISOString();
    acc[key] = (acc[key] || 0) + item.value;
    return acc;
  }, {} as Record<string, number>);

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

export function calculateMovingAverage(
  data: number[],
  windowSize: number = 7
): number[] {
  const result: number[] = [];
  
  for (let i = 0; i < data.length; i++) {
    const start = Math.max(0, i - windowSize + 1);
    const window = data.slice(start, i + 1);
    const average = window.reduce((a, b) => a + b, 0) / window.length;
    result.push(average);
  }
  
  return result;
}