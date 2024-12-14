import React from 'react';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { useMessages } from '../../hooks/useMessages';

export function MessagingCenter() {
  const { sendMessage, isSending } = useMessages();

  const handleSendMessage = (content: string, attachments?: File[]) => {
    sendMessage({
      content,
      attachments: attachments?.map(file => file.name) // In a real app, you'd upload files
    });
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col bg-white rounded-lg shadow">
      <div className="border-b border-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <MessageList />
      </div>

      <MessageInput 
        onSendMessage={handleSendMessage}
        isLoading={isSending}
      />
    </div>
  );
}