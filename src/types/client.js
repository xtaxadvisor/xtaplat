import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { clientService } from '../services/api/client';
import { useNotificationStore } from '../lib/store';
export function useClient(clientId) {
    const queryClient = useQueryClient();
    const { addNotification } = useNotificationStore();
    // Fetch client data
    const { data: client, isLoading } = useQuery({
        queryKey: ['client', clientId],
        queryFn: () => clientService.getById(clientId),
        onError: (error) => {
            addNotification(`Failed to fetch client data: ${error.message}`, 'error');
        },
    });
    // Mutation to update a client
    const updateClientMutation = useMutation({
        mutationFn: (updatedClient) => clientService.update(updatedClient),
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
        mutationFn: (clientId) => clientService.delete(clientId),
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
