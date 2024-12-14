import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { clientService } from '../services/api/client';
import { useNotificationStore } from '../lib/store';
import type { Client } from '../types';

export function useClient(clientId: string) {
  const queryClient = useQueryClient();
  const { addNotification } = useNotificationStore();

  const { data: client, isLoading } = useQuery({
    queryKey: ['client', clientId],
    queryFn: () => clientService.getById(clientId),
  });

  const updateClientMutation = useMutation({
    mutationFn: clientService.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['client', clientId] });
      addNotification('Client updated successfully', 'success');
    },
    onError: () => {
      addNotification('Failed to update client', 'error');
    },
  });

  const deleteClientMutation = useMutation({
    mutationFn: clientService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      addNotification('Client deleted successfully', 'success');
    },
    onError: () => {
      addNotification('Failed to delete client', 'error');
    },
  });

  return {
    client,
    isLoading,
    updateClient: updateClientMutation.mutate,
    deleteClient: deleteClientMutation.mutate,
  };
}