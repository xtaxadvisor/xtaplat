<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { useMessages } from '../../hooks/useMessages';
export function MessagingCenter() {
    const { sendMessage, isSending } = useMessages();
    const handleSendMessage = (content, attachments) => {
        sendMessage({
            content,
            attachments: attachments?.map(file => file.name) // In a real app, you'd upload files
        });
    };
<<<<<<< HEAD
    return (_jsxs("div", { className: "h-[calc(100vh-12rem)] flex flex-col bg-white rounded-lg shadow", children: [_jsx("div", { className: "border-b border-gray-200 p-4", children: _jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Messages" }) }), _jsx("div", { className: "flex-1 overflow-y-auto p-4", children: _jsx(MessageList, {}) }), _jsx(MessageInput, { onSendMessage: handleSendMessage, isLoading: isSending })] }));
=======
    return (<div className="h-[calc(100vh-12rem)] flex flex-col bg-white rounded-lg shadow">
      <div className="border-b border-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <MessageList />
      </div>

      <MessageInput onSendMessage={handleSendMessage} isLoading={isSending}/>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
