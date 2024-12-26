import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Mic, MicOff, Video, VideoOff, Phone } from 'lucide-react';
import { Button } from '../../ui/Button';
export function VideoControls({ isMuted, isVideoEnabled, onToggleMute, onToggleVideo, onEndCall }) {
    return (_jsx("div", { className: "bg-gray-800 p-4", children: _jsxs("div", { className: "flex justify-center space-x-4", children: [_jsx(Button, { variant: "outline", size: "lg", className: `rounded-full ${isMuted ? 'bg-red-600 text-white' : ''}`, onClick: onToggleMute, icon: isMuted ? MicOff : Mic }), _jsx(Button, { variant: "outline", size: "lg", className: `rounded-full ${!isVideoEnabled ? 'bg-red-600 text-white' : ''}`, onClick: onToggleVideo, icon: isVideoEnabled ? Video : VideoOff }), _jsx(Button, { variant: "outline", size: "lg", className: "rounded-full bg-red-600 text-white hover:bg-red-700", onClick: onEndCall, icon: Phone })] }) }));
}
