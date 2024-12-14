import { useQuery } from '@tanstack/react-query';
import { analyticsService } from '../../../services/api/analytics';

export function useRecentActivity() {
  const { data: activities, isLoading } = useQuery({
    queryKey: ['recent-activity'],
    queryFn: analyticsService.getRecentActivity,
    refetchInterval: 30000 // Refresh every 30 seconds
  });

  return {
    activities,
    isLoading
  };
}