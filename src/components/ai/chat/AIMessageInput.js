import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
export function AIMessageInput({ onSend, isDisabled, placeholder }) {
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() && !isDisabled) {
            onSend(message.trim());
            setMessage('');
        }
    };
    return (_jsx("form", { onSubmit: handleSubmit, className: "border-t p-4", children: _jsxs("div", { className: "flex space-x-2", children: [_jsx(Input, { value: message, onChange: (e) => setMessage(e.target.value), placeholder: placeholder || "Type your message...", disabled: isDisabled, className: "flex-1" }), _jsx(Button, { type: "submit", variant: "primary", icon: Send, disabled: isDisabled || !message.trim() })] }) }));
}
