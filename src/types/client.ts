import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { clientService } from '../services/api/client';
import { useNotificationStore } from '../lib/store';
import type { Client } from '../types';

// Type for the useClient hook return value
interface UseClientResult {
  client: Client | undefined;
  isLoading: boolean;
  updateClient: (client: Client) => void;
  deleteClient: (clientId: string) => void;
}

export function useClient(clientId: string): UseClientResult {
  const queryClient = useQueryClient();
  const { addNotification } = useNotificationStore();

  // Fetch client data
  const { data: client, isLoading } = useQuery<Client, Error, Client>({
    queryKey: ['client', clientId],
    queryFn: () => clientService.getById(clientId),
    onError: (error: Error) => {
      addNotification(`Failed to fetch client data: ${error.message}`, 'error');
    },
  });

  // Mutation to update a client
  const updateClientMutation = useMutation({
    mutationFn: (updatedClient: Client) => clientService.update(updatedClient),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['client', clientId] });
      addNotification('Client updated successfully', 'success');
    },
    onError: () => {
      addNotification('Failed to update client', 'error');
    },
  });

  // Mutation to delete a client
  const deleteClientMutation = useMutation({
    mutationFn: (clientId: string) => clientService.delete(clientId),
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