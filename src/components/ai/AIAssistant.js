import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
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
    return (_jsxs(_Fragment, { children: [_jsx(AIAssistantBubble, { onOpen: handleOpen, unreadCount: unreadCount }), isOpen && _jsx(AIChat, { onClose: handleClose })] }));
}
