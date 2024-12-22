import React from 'react';
import { Bot, User } from 'lucide-react';
export function AIMessage({ message }) {
    const isUser = message.role === 'user';
    return (<div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (<div className="mr-3 flex-shrink-0">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Bot className="h-5 w-5 text-blue-600"/>
          </div>
        </div>)}
      <div className={`max-w-[80%] rounded-lg px-4 py-2 ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <p className="text-sm">{message.content}</p>
      </div>
      {isUser && (<div className="ml-3 flex-shrink-0">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-gray-600"/>
          </div>
        </div>)}
    </div>);
}
