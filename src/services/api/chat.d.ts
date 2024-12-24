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
export declare const chatService: {
    getMessages: (consultationId: string) => Promise<ChatMessage[]>;
    sendMessage: (data: SendMessageDTO) => Promise<ChatMessage>;
    deleteMessage: (messageId: string) => Promise<void>;
    retryMessage: (messageId: string) => Promise<ChatMessage>;
    markAsDelivered: (messageId: string) => Promise<void>;
};
