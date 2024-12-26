import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../services/api';
import { useNotificationStore } from '../lib/store';
export function useUsers() {
    const queryClient = useQueryClient();
    const { addNotification } = useNotificationStore();
    const { data: users, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: () => api.get('/users')
    });
    const createUserMutation = useMutation({
        mutationFn: (data) => api.post('/users', data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
            addNotification('User created successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to create user', 'error');
        }
    });
    const updateUserMutation = useMutation({
        mutationFn: ({ id, ...data }) => api.put(`/users/${id}`, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
            addNotification('User updated successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to update user', 'error');
        }
    });
    const deleteUserMutation = useMutation({
        mutationFn: (id) => api.delete(`/users/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
            addNotification('User deleted successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to delete user', 'error');
        }
    });
    return {
        users,
        isLoading,
        createUser: createUserMutation.mutate,
        updateUser: updateUserMutation.mutate,
        deleteUser: deleteUserMutation.mutate,
        isCreating: createUserMutation.status === 'pending',
        isUpdating: updateUserMutation.status === 'pending',
        isDeleting: deleteUserMutation.status === 'pending'
    };
}
