import type { ChatMessage } from '../../../services/api/chat';
interface ChatPanelProps {
    messages: ChatMessage[];
    onSendMessage: (content: string) => void;
    onRetryMessage?: (messageId: string) => void;
    isLoading?: boolean;
    isSending?: boolean;
}
export declare function ChatPanel({ messages, onSendMessage, onRetryMessage, isLoading, isSending }: ChatPanelProps): any;
export {};
