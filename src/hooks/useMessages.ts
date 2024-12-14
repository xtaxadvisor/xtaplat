import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { messageService } from '../services/api/message';
import { useNotificationStore } from '../lib/store';
import type { Message } from '../types';

export function useMessages() {
  const queryClient = useQueryClient();
  const { addNotification } = useNotificationStore();

  const { data: messages, isLoading } = useQuery({
    queryKey: ['messages'],
    queryFn: messageService.getThreads
  });

  const sendMessageMutation = useMutation({
    mutationFn: messageService.send,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] });
      addNotification('Message sent successfully', 'success');
    },
    onError: () => {
      addNotification('Failed to send message', 'error');
    }
  });

  const markAsReadMutation = useMutation({
    mutationFn: messageService.markAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    }
  });

  return {
    messages,
    isLoading,
    sendMessage: sendMessageMutation.mutate,
    markAsRead: markAsReadMutation.mutate,
    isSending: sendMessageMutation.isLoading
  };
}