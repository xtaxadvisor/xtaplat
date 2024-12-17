```tsx
import React from 'react';
import { Bot, MessageSquare, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface AIAssistantBubbleProps {
  onOpen: () => void;
  unreadCount?: number;
}

export function AIAssistantBubble({ onOpen, unreadCount }: AIAssistantBubbleProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={onOpen}
        className="relative p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
      >
        <Bot className="h-6 w-6" />
        {unreadCount && unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {unreadCount}
          </span>
        )}
      </Button>
    </div>
  );
}
```