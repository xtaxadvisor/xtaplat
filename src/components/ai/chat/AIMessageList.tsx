import React, { useRef, useEffect } from 'react';
import { AIMessage } from './AIMessage';
import { AITypingIndicator } from '../AITypingIndicator';
import type { AIMessage as AIMessageType } from '../../../types/ai';

interface AIMessageListProps {
  messages: AIMessageType[];
  isTyping?: boolean;
}

export function AIMessageList({ messages, isTyping }: AIMessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <AIMessage
          key={index}
          message={message}
          isLast={index === messages.length - 1}
        />
      ))}
      {isTyping && <AITypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
}