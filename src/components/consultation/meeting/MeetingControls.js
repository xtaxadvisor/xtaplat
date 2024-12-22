import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Share2, UserPlus, MessageSquare } from 'lucide-react';
import { Button } from '../../ui/Button';
export function MeetingControls({ onShare, onInvite, onChat, isChatOpen }) {
    return (_jsxs("div", { className: "absolute top-4 right-4 flex space-x-2", children: [_jsx(Button, { variant: "outline", size: "sm", icon: Share2, onClick: onShare, className: "bg-black bg-opacity-50 text-white hover:bg-opacity-75", children: "Share Screen" }), _jsx(Button, { variant: "outline", size: "sm", icon: UserPlus, onClick: onInvite, className: "bg-black bg-opacity-50 text-white hover:bg-opacity-75", children: "Invite" }), _jsx(Button, { variant: "outline", size: "sm", icon: MessageSquare, onClick: onChat, className: `bg-black bg-opacity-50 text-white hover:bg-opacity-75 ${isChatOpen ? 'bg-blue-600 bg-opacity-75' : ''}`, children: "Chat" })] }));
}
