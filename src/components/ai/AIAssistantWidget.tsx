import React, { useState, useCallback } from 'react';
import { Bot } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAI } from '../../hooks/useAI';
import { AIChat } from './chat/AIChat';

interface AIAssistantWidgetProps {
  className?: string;
}

export function AIAssistantWidget({ className = '' }: AIAssistantWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, sendMessage, isLoading, error } = useAI();

  const handleSendMessage = useCallback(async (content: string) => {
    try {
      await sendMessage(content);
    } catch (error) {
      // Error handling is done in useAI hook
    }
  }, [sendMessage]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
        <Button
          onClick={() => setIsOpen(true)}
          className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          <Bot className="h-6 w-6" />
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <AIChat
            messages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            error={error}
          />
        </div>
      )}
    </>
  );
}