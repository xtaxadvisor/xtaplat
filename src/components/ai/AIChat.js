import React from 'react';
import { Bot, X } from 'lucide-react';
import { AIMessageList } from './chat/AIMessageList';
import { AIMessageInput } from './chat/AIMessageInput';
import { AIWelcomeMessage } from './AIWelcomeMessage';
import { AISuggestions } from './AISuggestions';
import { AIContextualHelp } from './chat/AIContextualHelp';
import { useAI } from '../../hooks/useAI';
import { detectContext, getContextualSuggestions } from '../../utils/ai/contextDetection';
export function AIChat({ onClose }) {
    const [context, setContext] = React.useState('visitor');
    const { messages, sendMessage, isLoading } = useAI({ context });
    const handleSendMessage = async (content) => {
        const newContext = detectContext(content);
        setContext(newContext);
        await sendMessage(content);
    };
    const handleSuggestionSelect = (suggestion) => {
        handleSendMessage(suggestion);
    };
    return (<div className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="flex items-center space-x-2">
          <Bot className="h-6 w-6"/>
          <div>
            <h3 className="font-medium">AI Assistant</h3>
            <p className="text-xs text-blue-100">How can I help you?</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white hover:text-blue-100 transition-colors">
          <X className="h-5 w-5"/>
        </button>
      </div>

      <div className="h-[500px] flex flex-col">
        {messages.length === 0 ? (<div className="flex-1 overflow-y-auto">
            <AIWelcomeMessage />
            <AISuggestions suggestions={getContextualSuggestions('visitor')} onSelect={handleSuggestionSelect}/>
          </div>) : (<AIMessageList messages={messages} isTyping={isLoading}/>)}

        <div className="mt-auto">
          {messages.length > 0 && (<AIContextualHelp context={context} suggestions={getContextualSuggestions(context)} onSelect={handleSuggestionSelect}/>)}
          <AIMessageInput onSend={handleSendMessage} isDisabled={isLoading} placeholder="Type your message..."/>
        </div>
      </div>
    </div>);
}
