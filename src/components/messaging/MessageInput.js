<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Send, Paperclip } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
export function MessageInput({ onSendMessage, isLoading }) {
    const [message, setMessage] = useState('');
    const [attachments, setAttachments] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message, attachments);
            setMessage('');
            setAttachments([]);
        }
    };
    const handleFileChange = (e) => {
        if (e.target.files) {
            setAttachments(Array.from(e.target.files));
        }
    };
<<<<<<< HEAD
    return (_jsxs("form", { onSubmit: handleSubmit, className: "border-t border-gray-200 p-4", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("input", { type: "file", multiple: true, className: "hidden", id: "file-upload", onChange: handleFileChange }), _jsx("label", { htmlFor: "file-upload", children: _jsx(Button, { type: "button", variant: "ghost", icon: Paperclip, className: "text-gray-400 hover:text-gray-600" }) }), _jsx(Input, { value: message, onChange: (e) => setMessage(e.target.value), placeholder: "Type your message...", className: "flex-1", disabled: isLoading }), _jsx(Button, { type: "submit", variant: "primary", icon: Send, disabled: isLoading || !message.trim(), children: "Send" })] }), attachments.length > 0 && (_jsx("div", { className: "mt-2 space-y-1", children: attachments.map((file, index) => (_jsx("div", { className: "text-sm text-gray-500", children: file.name }, index))) }))] }));
=======
    return (<form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
      <div className="flex items-center space-x-4">
        <input type="file" multiple className="hidden" id="file-upload" onChange={handleFileChange}/>
        <label htmlFor="file-upload">
          <Button type="button" variant="ghost" icon={Paperclip} className="text-gray-400 hover:text-gray-600"/>
        </label>
        <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message..." className="flex-1" disabled={isLoading}/>
        <Button type="submit" variant="primary" icon={Send} disabled={isLoading || !message.trim()}>
          Send
        </Button>
      </div>
      {attachments.length > 0 && (<div className="mt-2 space-y-1">
          {attachments.map((file, index) => (<div key={index} className="text-sm text-gray-500">
              {file.name}
            </div>))}
        </div>)}
    </form>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
