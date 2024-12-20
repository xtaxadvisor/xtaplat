import React from 'react';

interface AIMessageProps {
  isUser: boolean;
  message: string;
}

const AIMessage: React.FC<AIMessageProps> = ({ isUser, message }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex flex-col max-w-[80%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`rounded-lg px-4 py-2 ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
        >
          {message}
        </div>
      </div>
    </div>
  );
};

export default AIMessage;