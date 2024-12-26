import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { mockInvestmentForumService } from '../services/mockApi/investmentForum';
import { useNotificationStore } from '../lib/store';
export function useInvestmentForum(category) {
    const queryClient = useQueryClient();
    const { addNotification } = useNotificationStore();
    const { data: threads, isLoading } = useQuery({
        queryKey: ['investment-threads', category],
        queryFn: () => mockInvestmentForumService.getThreads(category)
    });
    const createThreadMutation = useMutation({
        mutationFn: mockInvestmentForumService.createThread,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['investment-threads'] });
            addNotification('Thread created successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to create thread', 'error');
        }
    });
    const updateThreadMutation = useMutation({
        mutationFn: ({ id, ...data }) => mockInvestmentForumService.updateThread(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['investment-threads'] });
            addNotification('Thread updated successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to update thread', 'error');
        }
    });
    const deleteThreadMutation = useMutation({
        mutationFn: mockInvestmentForumService.deleteThread,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['investment-threads'] });
            addNotification('Thread deleted successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to delete thread', 'error');
        }
    });
    return {
        threads,
        isLoading,
        createThread: createThreadMutation.mutate,
        updateThread: updateThreadMutation.mutate,
        deleteThread: deleteThreadMutation.mutate,
        isCreating: createThreadMutation.status === 'pending',
        isUpdating: updateThreadMutation.status === 'pending',
        isDeleting: deleteThreadMutation.status === 'pending'
    };
}
