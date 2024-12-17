import React, { useState } from 'react';
import { AIAssistantBubble } from './AIAssistantBubble';
import { AIChat } from './AIChat';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const handleNewMessage = () => {
    if (!isOpen) {
      setUnreadCount(prev => prev + 1);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setUnreadCount(0);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <AIAssistantBubble onOpen={handleOpen} unreadCount={unreadCount} />
      {isOpen && <AIChat onClose={handleClose} />}
    </>
  );
}