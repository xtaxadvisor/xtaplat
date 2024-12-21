import { useState, useEffect, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNotificationStore } from '../lib/store';
import { socketService } from '../services/socket';
import { chatService } from '../services/api/chat';
export function useChat(consultationId) {
    const queryClient = useQueryClient();
    const { addNotification } = useNotificationStore();
    const [isSending, setIsSending] = useState(false);
    const { data: messages, isLoading } = useQuery({
        queryKey: ['chat-messages', consultationId],
        queryFn: () => chatService.getMessages(consultationId),
        staleTime: 0,
        refetchInterval: 3000, // Polling fallback
    });
    const sendMessageMutation = useMutation({
        mutationFn: chatService.sendMessage,
        onMutate: async (newMessage) => {
            // Optimistic update
            const tempMessage = {
                id: `temp-${Date.now()}`,
                consultationId,
                sender: newMessage.sender,
                content: newMessage.content,
                timestamp: new Date().toISOString(),
                status: 'sent'
            };
            queryClient.setQueryData(['chat-messages', consultationId], (old = []) => [...old, tempMessage]);
            return { tempMessage };
        },
        onSuccess: (response, variables, context) => {
            // Replace temp message with real one
            queryClient.setQueryData(['chat-messages', consultationId], (old = []) => old.map(msg => msg.id === context?.tempMessage.id ? response : msg));
        },
        onError: (error, variables, context) => {
            // Mark message as failed
            queryClient.setQueryData(['chat-messages', consultationId], (old = []) => old.map(msg => msg.id === context?.tempMessage.id
                ? { ...msg, status: 'failed' }
                : msg));
            addNotification('Failed to send message', 'error');
        }
    });
    const retryMessageMutation = useMutation({
        mutationFn: chatService.retryMessage,
        onSuccess: (response) => {
            queryClient.setQueryData(['chat-messages', consultationId], (old = []) => old.map(msg => msg.id === response.id ? response : msg));
        }
    });
    useEffect(() => {
        const socket = socketService.connect(consultationId);
        socket?.on('chat:message', (message) => {
            queryClient.setQueryData(['chat-messages', consultationId], (old = []) => [...old, message]);
        });
        socket?.on('chat:delivered', (messageId) => {
            queryClient.setQueryData(['chat-messages', consultationId], (old = []) => old.map(msg => msg.id === messageId
                ? { ...msg, status: 'delivered' }
                : msg));
        });
        return () => {
            socket?.off('chat:message');
            socket?.off('chat:delivered');
            socketService.disconnect();
        };
    }, [consultationId, queryClient]);
    const sendMessage = useCallback(async (content) => {
        try {
            setIsSending(true);
            await sendMessageMutation.mutateAsync({
                consultationId,
                content,
                sender: 'You' // Replace with actual user name/id
            });
        }
        finally {
            setIsSending(false);
        }
    }, [consultationId, sendMessageMutation]);
    const retryMessage = useCallback((messageId) => {
        retryMessageMutation.mutate(messageId);
    }, [retryMessageMutation]);
    return {
        messages: messages || [],
        isLoading,
        sendMessage,
        retryMessage,
        isSending
    };
}
