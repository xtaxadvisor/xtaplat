import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';

interface AIMessageInputProps {
  onSend: (message: string) => void;
  isDisabled?: boolean;
  placeholder?: string;
}

export function AIMessageInput({ 
  onSend, 
  isDisabled, 
  placeholder 
}: AIMessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isDisabled) {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t p-4">
      <div className="flex space-x-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder || "Type your message..."}
          disabled={isDisabled}
          className="flex-1"
        />
        <Button
          type="submit"
          variant="primary"
          icon={Send}
          disabled={isDisabled || !message.trim()}
        />
      </div>
    </form>
  );
}