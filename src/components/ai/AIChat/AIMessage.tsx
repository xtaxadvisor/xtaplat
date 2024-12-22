import React from 'react';
import { Bot, User } from 'lucide-react'; // Importing icons
import type { AIMessage as AIMessageType } from '../../../types/ai'; // Importing type definitions

// Define props for the AIMessage component
interface AIMessageProps {
  message: AIMessageType; // Message type from your type definitions
  isLast: boolean; // Whether this is the last message in the conversation
}

// AIMessage functional component
export function AIMessage({ message, isLast }: AIMessageProps) {
  // Determine if the message is from the user
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {/* Show the bot's icon if the message is not from the user */}
      {!isUser && (
        <div className="flex-shrink-0 mr-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Bot className="h-5 w-5 text-blue-600" />
          </div>
        </div>
      )}

      {/* Message bubble container */}
      <div className={`flex flex-col max-w-[80%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`rounded-lg px-4 py-2 ${
            isUser 
              ? 'bg-blue-600 text-white' // User messages in blue
              : 'bg-gray-100 text-gray-900' // Bot messages in gray
          }`}
        >
          {/* Render the message content */}
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        </div>
      </div>

      {/* Show the user's icon if the message is from the user */}
      {isUser && (
        <div className="flex-shrink-0 ml-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      )}
    </div>
  );
}