import React from 'react';
import { AIMessageList } from './AIMessageList';
import { AIMessageInput } from './AIMessageInput';
import { AIWelcomeMessage } from '../AIWelcomeMessage';
import { AISuggestions } from '../AISuggestions';
import { AIHeader } from './AIHeader';
import type { AIMessage } from '../../../types/ai';

interface AIChatProps {
  messages: AIMessage[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  error?: Error;
}

export function AIChat({ messages, onSendMessage, isLoading, error }: AIChatProps) {
  const suggestions = [
    'What services do you offer?',
    'How can I schedule a consultation?',
    'What are your business hours?',
    'Do you offer virtual meetings?'
  ];

  return (
    <div className="flex flex-col h-[500px]">
      <AIHeader onClose={() => {}} />
      
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <>
            <AIWelcomeMessage />
            <AISuggestions
              suggestions={suggestions}
              onSelect={onSendMessage}
            />
          </>
        ) : (
          <AIMessageList 
            messages={messages} 
            isTyping={isLoading} 
          />
        )}
      </div>

      <AIMessageInput
        onSend={onSendMessage}
        isDisabled={isLoading}
        placeholder="Type your message..."
      />

      {error && (
        <div className="p-4 bg-red-50 text-red-600 text-sm border-t border-red-100">
          {error.message}
        </div>
      )}
    </div>
  );
}