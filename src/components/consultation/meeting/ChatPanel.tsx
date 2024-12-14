import React, { useState, useRef, useEffect } from 'react';
import { Send, AlertCircle, Check, CheckCheck } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { formatTime } from '../../../utils/date';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import type { ChatMessage } from '../../../services/api/chat';

interface ChatPanelProps {
  messages: ChatMessage[];
  onSendMessage: (content: string) => void;
  onRetryMessage?: (messageId: string) => void;
  isLoading?: boolean;
  isSending?: boolean;
}

export function ChatPanel({ 
  messages, 
  onSendMessage,
  onRetryMessage,
  isLoading,
  isSending 
}: ChatPanelProps) {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() && !isSending) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  const getMessageStatus = (status: ChatMessage['status']) => {
    switch (status) {
      case 'sent':
        return <Check className="h-4 w-4 text-gray-400" />;
      case 'delivered':
        return <CheckCheck className="h-4 w-4 text-blue-500" />;
      case 'failed':
        return (
          <button
            onClick={() => onRetryMessage?.(message.id)}
            className="flex items-center text-red-500 hover:text-red-600"
          >
            <AlertCircle className="h-4 w-4 mr-1" />
            Retry
          </button>
        );
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium text-gray-900">Chat</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col ${
              message.sender === 'You' ? 'items-end' : 'items-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.sender === 'You'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="text-sm font-medium mb-1">{message.sender}</p>
              <p>{message.content}</p>
            </div>
            <div className="flex items-center mt-1 space-x-2">
              <span className="text-xs text-gray-500">
                {formatTime(message.timestamp)}
              </span>
              {message.sender === 'You' && getMessageStatus(message.status)}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="border-t p-4">
        <div className="flex space-x-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
            disabled={isSending}
          />
          <Button 
            type="submit" 
            variant="primary" 
            icon={Send}
            disabled={isSending || !newMessage.trim()}
          />
        </div>
      </form>
    </div>
  );
}