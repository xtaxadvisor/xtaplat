import { api } from '../api';
export const messageService = {
    getThreads: () => api.get('/messages/threads'),
    getThread: (threadId) => api.get(`/messages/threads/${threadId}`),
    send: (data) => api.post('/messages', data),
    markAsRead: (messageId) => api.put(`/messages/${messageId}/read`),
    delete: (messageId) => api.delete(`/messages/${messageId}`),
};
