import type { Message } from '../../types';
export interface SendMessageDTO {
    recipientId: string;
    content: string;
    attachments?: string[];
}
export interface MessageThread {
    id: string;
    participants: string[];
    lastMessage: Message;
    unreadCount: number;
}
export declare const messageService: {
    getThreads: () => Promise<MessageThread[]>;
    getThread: (threadId: string) => Promise<Message[]>;
    send: (data: SendMessageDTO) => Promise<Message>;
    markAsRead: (messageId: string) => Promise<void>;
    delete: (messageId: string) => Promise<void>;
};
