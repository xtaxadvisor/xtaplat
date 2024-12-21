import React, { useRef, useEffect } from 'react';
import { AIMessage } from './AIMessage';
import { AITypingIndicator } from './AITypingIndicator';
export function AIMessageList({ messages, isTyping }) {
    const messagesEndRef = useRef(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);
    return (<div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (<AIMessage key={index} message={message}/>))}
      {isTyping && <AITypingIndicator />}
      <div ref={messagesEndRef}/>
    </div>);
}
