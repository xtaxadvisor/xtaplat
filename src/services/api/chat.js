import { api } from '../api';
export const chatService = {
    getMessages: (consultationId) => api.get(`/consultations/${consultationId}/messages`),
    sendMessage: (data) => api.post('/messages', data),
    deleteMessage: (messageId) => api.delete(`/messages/${messageId}`),
    retryMessage: (messageId) => api.post(`/messages/${messageId}/retry`),
    markAsDelivered: (messageId) => api.put(`/messages/${messageId}/delivered`),
};
