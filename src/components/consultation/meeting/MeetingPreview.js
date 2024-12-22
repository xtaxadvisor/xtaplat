import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Video, Users } from 'lucide-react';
import { Button } from '../../ui/Button';
import { useVideoStream } from '../../../hooks/useVideoStream';
import { VideoStream } from './VideoStream';
export function MeetingPreview({ onJoin, onCancel }) {
    const { videoRef, isVideoEnabled, toggleVideo } = useVideoStream();
    return (_jsx("div", { className: "max-w-2xl mx-auto p-6", children: _jsx("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden", children: _jsxs("div", { className: "p-6", children: [_jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Video Preview" }), _jsxs("div", { className: "relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-6", children: [_jsx(VideoStream, { videoRef: videoRef, isSelfView: true }), !isVideoEnabled && (_jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gray-800", children: _jsx(Users, { className: "h-16 w-16 text-gray-400" }) }))] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Button, { variant: "outline", onClick: toggleVideo, icon: Video, children: isVideoEnabled ? 'Turn Off Camera' : 'Turn On Camera' }), _jsxs("div", { className: "space-x-3", children: [_jsx(Button, { variant: "outline", onClick: onCancel, children: "Cancel" }), _jsx(Button, { variant: "primary", onClick: onJoin, children: "Join Meeting" })] })] })] }) }) }));
}
