import { useState, useCallback } from 'react';
import { useNotificationStore } from '../lib/store';
import type { AIMessage } from '../types/ai';

interface UseAIOptions {
  context?: string;
}

export function useAI({ context = 'visitor' }: UseAIOptions = {}) {
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { addNotification } = useNotificationStore();

  const sendMessage = useCallback(async (content: string) => {
    try {
      setIsLoading(true);
      
      // Add user message immediately
      const userMessage: AIMessage = { role: 'user', content };
      setMessages(prev => [...prev, userMessage]);

      // Call serverless function
      const response = await fetch(`${import.meta.env.VITE_API_URL}/openai`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, context })
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      
      // Add AI response
      const assistantMessage: AIMessage = { 
        role: 'assistant', 
        content: data.response 
      };
      setMessages(prev => [...prev, assistantMessage]);

      return data.response;
    } catch (error) {
      addNotification('Failed to get AI response', 'error');
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [context, addNotification]);

  return {
    messages,
    sendMessage,
    isLoading
  };
}