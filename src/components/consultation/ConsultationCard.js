import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar, Clock, Video } from 'lucide-react';
import { Button } from '../ui/Button';
import { formatDate, formatTime } from '../../utils/date';
import { useNavigate } from 'react-router-dom';
export function ConsultationCard({ consultation, onCancel, onReschedule }) {
    const navigate = useNavigate();
    const isUpcoming = new Date(consultation.startTime) > new Date();
    const canJoin = consultation.status === 'scheduled' &&
        Math.abs(new Date(consultation.startTime).getTime() - new Date().getTime()) <= 5 * 60 * 1000; // 5 minutes before
    const handleJoinMeeting = () => {
        navigate(`/consultation/${consultation.id}`);
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'scheduled':
                return 'bg-green-100 text-green-800';
            case 'in-progress':
                return 'bg-blue-100 text-blue-800';
            case 'completed':
                return 'bg-gray-100 text-gray-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    return (_jsx("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: _jsxs("div", { className: "p-6", children: [_jsx("div", { className: "flex justify-between items-start", children: _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: consultation.type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }), _jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${getStatusColor(consultation.status)}`, children: consultation.status.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) })] }) }), _jsxs("div", { className: "mt-4 space-y-3", children: [_jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Calendar, { className: "h-4 w-4 mr-1" }), formatDate(consultation.startTime)] }), _jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), formatTime(consultation.startTime), " - ", formatTime(consultation.endTime)] }), consultation.isVirtual && (_jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Video, { className: "h-4 w-4 mr-1" }), "Virtual Meeting"] }))] }), isUpcoming && consultation.status !== 'cancelled' && (_jsxs("div", { className: "mt-6 flex justify-end space-x-3", children: [canJoin && consultation.meetingLink && (_jsx(Button, { variant: "primary", onClick: handleJoinMeeting, icon: Video, children: "Join Meeting" })), _jsx(Button, { variant: "outline", size: "sm", onClick: onReschedule, children: "Reschedule" }), _jsx(Button, { variant: "outline", size: "sm", className: "text-red-600 hover:text-red-700", onClick: onCancel, children: "Cancel" })] }))] }) }));
}
