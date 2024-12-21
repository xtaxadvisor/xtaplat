import React, { useState } from 'react';
import { AIMessageList } from './AIMessageList';
export default function ChatComponent() {
    const [messages, setMessages] = useState([
        { role: 'user', content: 'Hello!' },
        { role: 'bot', content: 'Hi! How can I assist you today?' },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [inputValue, setInputValue] = useState(''); // Tracks the input value
    const handleSendMessage = () => {
        if (!inputValue.trim())
            return; // Prevent sending empty messages
        // Add the user's message
        setMessages((prev) => [...prev, { role: 'user', content: inputValue }]);
        setInputValue(''); // Clear the input field
        // Simulate AI typing and response
        setIsTyping(true);
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { role: 'bot', content: 'This is an AI-generated response!' },
            ]);
            setIsTyping(false);
        }, 2000);
    };
    return (<div className="flex flex-col h-full">
      {/* Message List */}
      <AIMessageList messages={messages} isTyping={isTyping}/>

      {/* Input Field */}
      <div className="p-4 border-t border-gray-300">
        <div className="flex items-center space-x-2">
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        }} placeholder="Type your message..." className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"/>
          <button onClick={handleSendMessage} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Send
          </button>
        </div>
      </div>
    </div>);
}
