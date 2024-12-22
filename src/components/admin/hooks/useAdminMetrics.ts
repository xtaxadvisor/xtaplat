import { useQuery } from '@tanstack/react-query';
import { analyticsService } from '../../../services/api/analytics';

export function useAdminMetrics() {
  const { data: metrics, isLoading } = useQuery({
    queryKey: ['admin-metrics'],
    queryFn: ({ queryKey }) => analyticsService.getAnalytics(queryKey[1])
  });

  return {
    metrics,
    isLoading
  };
}