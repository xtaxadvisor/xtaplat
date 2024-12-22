import { useQuery } from '@tanstack/react-query';
import { analyticsService } from '../../../services/api/analytics';

export function useSystemStatus() {
  const { data: status, isLoading } = useQuery({
    queryKey: ['system-status'],
    queryFn: ({ queryKey }) => analyticsService.getAnalytics(queryKey[1]),
    refetchInterval: 60000 // Refresh every minute
  });

  return {
    status,
    isLoading
  };
}