import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../services/api';
import { useNotificationStore } from '../lib/store';
import type { User } from '../types';

interface CreateUserDTO {
  name: string;
  email: string;
  role: string;
}

interface UpdateUserDTO extends Partial<CreateUserDTO> {
  id: string;
}

export function useUsers() {
  const queryClient = useQueryClient();
  const { addNotification } = useNotificationStore();

  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => api.get<User[]>('/users')
  });

  const createUserMutation = useMutation({
    mutationFn: (data: CreateUserDTO) => api.post<User>('/users', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      addNotification('User created successfully', 'success');
    },
    onError: () => {
      addNotification('Failed to create user', 'error');
    }
  });

  const updateUserMutation = useMutation({
    mutationFn: ({ id, ...data }: UpdateUserDTO) => api.put<User>(`/users/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      addNotification('User updated successfully', 'success');
    },
    onError: () => {
      addNotification('Failed to update user', 'error');
    }
  });

  const deleteUserMutation = useMutation({
    mutationFn: (id: string) => api.delete<void>(`/users/${id}`),
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
    isCreating: createUserMutation.isLoading,
    isUpdating: updateUserMutation.isLoading,
    isDeleting: deleteUserMutation.isLoading
  };
}