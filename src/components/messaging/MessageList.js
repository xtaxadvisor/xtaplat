<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { MessageItem } from './MessageItem';
import { useMessages } from '../../hooks/useMessages';
import { LoadingSpinner } from '../ui/LoadingSpinner';
export function MessageList() {
    const { messages, isLoading } = useMessages();
    if (isLoading) {
<<<<<<< HEAD
        return _jsx(LoadingSpinner, {});
    }
    return (_jsxs("div", { className: "space-y-4", children: [messages?.map((message) => (_jsx(MessageItem, { message: message }, message.id))), messages?.length === 0 && (_jsx("div", { className: "text-center text-gray-500 py-8", children: "No messages yet" }))] }));
=======
        return <LoadingSpinner />;
    }
    return (<div className="space-y-4">
      {messages?.map((message) => (<MessageItem key={message.id} message={message}/>))}
      {messages?.length === 0 && (<div className="text-center text-gray-500 py-8">
          No messages yet
        </div>)}
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
