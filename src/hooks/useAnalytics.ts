import { useQuery } from '@tanstack/react-query';
import { analyticsService } from '../services/api/analytics';
import { useNotificationStore } from '../lib/store';
import { format, subDays, subMonths, subQuarters, subYears } from 'date-fns';

export function useAnalytics(timeRange: string) {
  const { addNotification } = useNotificationStore();

  const getDateRange = () => {
    const now = new Date();
    switch (timeRange) {
      case 'week':
        return format(subDays(now, 7), 'yyyy-MM-dd');
      case 'month':
        return format(subMonths(now, 1), 'yyyy-MM-dd');
      case 'quarter':
        return format(subQuarters(now, 1), 'yyyy-MM-dd');
      case 'year':
        return format(subYears(now, 1), 'yyyy-MM-dd');
      default:
        return format(subMonths(now, 1), 'yyyy-MM-dd');
    }
  };

  const { data: metrics, isLoading: metricsLoading } = useQuery({
    queryKey: ['analytics-metrics', timeRange],
    queryFn: () => analyticsService.getAnalytics(timeRange)
  });

  const { data: revenueData, isLoading: revenueLoading } = useQuery({
    queryKey: ['revenue-data', timeRange],
    queryFn: () => analyticsService.getRevenueData(timeRange)
  });

  const { data: clientGrowth, isLoading: clientGrowthLoading } = useQuery({
    queryKey: ['client-growth', timeRange],
    queryFn: () => analyticsService.getClientGrowth(timeRange)
  });

  const { data: performanceMetrics, isLoading: performanceLoading } = useQuery({
    queryKey: ['performance-metrics', timeRange],
    queryFn: () => analyticsService.getPerformanceMetrics(timeRange)
  });

  const exportAnalytics = async (format: 'pdf' | 'csv' | 'excel') => {
    try {
      const data = await analyticsService.exportAnalytics(timeRange, format);
      const blob = new Blob([data], { 
        type: format === 'csv' ? 'text/csv' : 
              format === 'excel' ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : 
              'application/pdf' 
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `analytics-report-${timeRange}.${format}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      addNotification('Analytics data exported successfully', 'success');
    } catch (error) {
      addNotification('Failed to export analytics data', 'error');
    }
  };

  return {
    metrics,
    revenueData,
    clientGrowth,
    performanceMetrics,
    isLoading: metricsLoading || revenueLoading || clientGrowthLoading || performanceLoading,
    exportAnalytics
  };
}