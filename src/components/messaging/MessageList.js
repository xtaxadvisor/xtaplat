import React from 'react';
import { MessageItem } from './MessageItem';
import { useMessages } from '../../hooks/useMessages';
import { LoadingSpinner } from '../ui/LoadingSpinner';
export function MessageList() {
    const { messages, isLoading } = useMessages();
    if (isLoading) {
        return <LoadingSpinner />;
    }
    return (<div className="space-y-4">
      {messages?.map((message) => (<MessageItem key={message.id} message={message}/>))}
      {messages?.length === 0 && (<div className="text-center text-gray-500 py-8">
          No messages yet
        </div>)}
    </div>);
}
