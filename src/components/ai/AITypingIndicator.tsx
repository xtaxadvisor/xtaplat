import React from 'react';

export function AITypingIndicator() {
  return (
    <div className="flex items-center space-x-2 p-2">
      <div className="flex space-x-1">
        <div 
          className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" 
          style={{ animationDelay: '0ms' }} 
        />
        <div 
          className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" 
          style={{ animationDelay: '150ms' }} 
        />
        <div 
          className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" 
          style={{ animationDelay: '300ms' }} 
        />
      </div>
      <span className="text-sm text-gray-500">AI is typing...</span>
    </div>
  );
}