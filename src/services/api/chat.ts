import { api } from '../api';

export interface ChatMessage {
  id: string;
  consultationId: string;
  sender: string;
  content: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'failed';
}

export interface SendMessageDTO {
  consultationId: string;
  content: string;
  sender: string;
}

export const chatService = {
  getMessages: (consultationId: string) => 
    api.get<ChatMessage[]>(`/consultations/${consultationId}/messages`),

  sendMessage: (data: SendMessageDTO) => 
    api.post<ChatMessage>('/messages', data),

  deleteMessage: (messageId: string) => 
    api.delete<void>(`/messages/${messageId}`),

  retryMessage: (messageId: string) =>
    api.post<ChatMessage>(`/messages/${messageId}/retry`),

  markAsDelivered: (messageId: string) =>
    api.put<void>(`/messages/${messageId}/delivered`),
};