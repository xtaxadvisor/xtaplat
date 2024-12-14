import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { settingsService } from '../services/api/settings';
import { useNotificationStore } from '../lib/store';

export function useSettings() {
  const queryClient = useQueryClient();
  const { addNotification } = useNotificationStore();

  const { data: settings, isLoading } = useQuery({
    queryKey: ['settings'],
    queryFn: settingsService.getSettings,
  });

  const updateSettingsMutation = useMutation({
    mutationFn: settingsService.updateSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['settings'] });
      addNotification('Settings updated successfully', 'success');
    },
    onError: () => {
      addNotification('Failed to update settings', 'error');
    },
  });

  return {
    settings,
    isLoading,
    updateSettings: updateSettingsMutation.mutate,
  };
}