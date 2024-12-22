<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Calendar, Clock, Video, MapPin } from 'lucide-react';
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
<<<<<<< HEAD
    return (_jsx("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: _jsxs("div", { className: "p-6", children: [_jsx("div", { className: "flex justify-between items-start", children: _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: consultation.type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }), _jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${getStatusColor(consultation.status)}`, children: consultation.status.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) })] }) }), _jsxs("div", { className: "mt-4 space-y-3", children: [_jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Calendar, { className: "h-4 w-4 mr-1" }), formatDate(consultation.startTime)] }), _jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), formatTime(consultation.startTime), " - ", formatTime(consultation.endTime)] }), consultation.isVirtual && (_jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Video, { className: "h-4 w-4 mr-1" }), "Virtual Meeting"] })), consultation.location && (_jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(MapPin, { className: "h-4 w-4 mr-1" }), consultation.location] }))] }), isUpcoming && consultation.status !== 'cancelled' && (_jsxs("div", { className: "mt-6 flex justify-end space-x-3", children: [canJoin && consultation.meetingLink && (_jsx(Button, { variant: "primary", onClick: handleJoinMeeting, icon: Video, children: "Join Meeting" })), _jsx(Button, { variant: "outline", size: "sm", onClick: onReschedule, children: "Reschedule" }), _jsx(Button, { variant: "outline", size: "sm", className: "text-red-600 hover:text-red-700", onClick: onCancel, children: "Cancel" })] }))] }) }));
=======
    return (<div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              {consultation.type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${getStatusColor(consultation.status)}`}>
              {consultation.status.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </span>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1"/>
            {formatDate(consultation.startTime)}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1"/>
            {formatTime(consultation.startTime)} - {formatTime(consultation.endTime)}
          </div>
          {consultation.isVirtual && (<div className="flex items-center text-sm text-gray-500">
              <Video className="h-4 w-4 mr-1"/>
              Virtual Meeting
            </div>)}
          {consultation.location && (<div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1"/>
              {consultation.location}
            </div>)}
        </div>

        {isUpcoming && consultation.status !== 'cancelled' && (<div className="mt-6 flex justify-end space-x-3">
            {canJoin && consultation.meetingLink && (<Button variant="primary" onClick={handleJoinMeeting} icon={Video}>
                Join Meeting
              </Button>)}
            <Button variant="outline" size="sm" onClick={onReschedule}>
              Reschedule
            </Button>
            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700" onClick={onCancel}>
              Cancel
            </Button>
          </div>)}
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
