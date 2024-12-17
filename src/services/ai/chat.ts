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
    Promise.resolve([]), // Implement actual API call

  sendMessage: (data: SendMessageDTO) => 
    Promise.resolve({} as ChatMessage), // Implement actual API call

  deleteMessage: (messageId: string) => 
    Promise.resolve(), // Implement actual API call

  retryMessage: (messageId: string) =>
    Promise.resolve({} as ChatMessage), // Implement actual API call

  markAsDelivered: (messageId: string) =>
    Promise.resolve() // Implement actual API call
};