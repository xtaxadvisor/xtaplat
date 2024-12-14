import React from 'react';
import { FileText, Download } from 'lucide-react';
import { formatTimeAgo } from '../../utils/date';
import type { Message } from '../../types';

interface MessageItemProps {
  message: Message;
}

export function MessageItem({ message }: MessageItemProps) {
  const isOwnMessage = message.senderId === 'currentUser'; // Replace with actual user ID logic

  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-lg rounded-lg px-4 py-2 ${
        isOwnMessage
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 text-gray-900'
      }`}>
        <div className="flex items-center space-x-2">
          <span className="font-medium">{message.senderId}</span>
          <span className="text-sm opacity-75">{formatTimeAgo(message.timestamp)}</span>
        </div>
        <p className="mt-1">{message.content}</p>
        {message.attachments?.map((attachment, index) => (
          <div key={index} className="mt-2 flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span className="text-sm">{attachment}</span>
            <button className="text-sm hover:opacity-75">
              <Download className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}