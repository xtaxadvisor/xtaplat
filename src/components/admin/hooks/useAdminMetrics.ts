import { useQuery } from '@tanstack/react-query';
import { analyticsService } from '../../../services/api/analytics';

export function useAdminMetrics() {
  const { data: metrics, isLoading } = useQuery({
    queryKey: ['admin-metrics'],
    queryFn: analyticsService.getAnalytics
  });

  return {
    metrics,
    isLoading
  };
}