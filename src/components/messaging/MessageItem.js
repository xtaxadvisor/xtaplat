<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { FileText, Download } from 'lucide-react';
import { formatTimeAgo } from '../../utils/date';
export function MessageItem({ message }) {
    const isOwnMessage = message.senderId === 'currentUser'; // Replace with actual user ID logic
<<<<<<< HEAD
    return (_jsx("div", { className: `flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`, children: _jsxs("div", { className: `max-w-lg rounded-lg px-4 py-2 ${isOwnMessage
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-900'}`, children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("span", { className: "font-medium", children: message.senderId }), _jsx("span", { className: "text-sm opacity-75", children: formatTimeAgo(message.timestamp) })] }), _jsx("p", { className: "mt-1", children: message.content }), message.attachments?.map((attachment, index) => (_jsxs("div", { className: "mt-2 flex items-center space-x-2", children: [_jsx(FileText, { className: "h-4 w-4" }), _jsx("span", { className: "text-sm", children: attachment }), _jsx("button", { className: "text-sm hover:opacity-75", children: _jsx(Download, { className: "h-4 w-4" }) })] }, index)))] }) }));
=======
    return (<div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-lg rounded-lg px-4 py-2 ${isOwnMessage
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-900'}`}>
        <div className="flex items-center space-x-2">
          <span className="font-medium">{message.senderId}</span>
          <span className="text-sm opacity-75">{formatTimeAgo(message.timestamp)}</span>
        </div>
        <p className="mt-1">{message.content}</p>
        {message.attachments?.map((attachment, index) => (<div key={index} className="mt-2 flex items-center space-x-2">
            <FileText className="h-4 w-4"/>
            <span className="text-sm">{attachment}</span>
            <button className="text-sm hover:opacity-75">
              <Download className="h-4 w-4"/>
            </button>
          </div>))}
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
