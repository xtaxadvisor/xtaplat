<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { useParams } from 'react-router-dom';
import { Video, Calendar, Clock, FileText, MessageSquare } from 'lucide-react';
import { Button } from '../ui/Button';
import { useConsultation } from '../../hooks/useConsultation';
import { LoadingSpinner } from '../ui/LoadingSpinner';
export function ConsultationDetail() {
    const { consultationId } = useParams();
    const { consultation, isLoading } = useConsultation(consultationId);
    if (isLoading) {
<<<<<<< HEAD
        return _jsx(LoadingSpinner, {});
    }
    if (!consultation) {
        return _jsx("div", { children: "Consultation not found" });
    }
    return (_jsx("div", { className: "space-y-6", children: _jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Consultation Details" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center text-gray-600", children: [_jsx(Calendar, { className: "h-5 w-5 mr-2" }), _jsxs("span", { children: ["Date: ", new Date(consultation.startTime).toLocaleDateString()] })] }), _jsxs("div", { className: "flex items-center text-gray-600", children: [_jsx(Clock, { className: "h-5 w-5 mr-2" }), _jsxs("span", { children: ["Time: ", new Date(consultation.startTime).toLocaleTimeString()] })] }), _jsxs("div", { className: "flex items-center text-gray-600", children: [_jsx(Video, { className: "h-5 w-5 mr-2" }), _jsxs("span", { children: ["Type: ", consultation.type] })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx(Button, { variant: "primary", icon: Video, className: "w-full", disabled: consultation.status !== 'scheduled', children: "Join Video Call" }), _jsx(Button, { variant: "outline", icon: MessageSquare, className: "w-full", children: "Send Message" }), _jsx(Button, { variant: "outline", icon: FileText, className: "w-full", children: "View Documents" })] })] })] }) }));
=======
        return <LoadingSpinner />;
    }
    if (!consultation) {
        return <div>Consultation not found</div>;
    }
    return (<div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Consultation Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-5 w-5 mr-2"/>
              <span>Date: {new Date(consultation.startTime).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2"/>
              <span>Time: {new Date(consultation.startTime).toLocaleTimeString()}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Video className="h-5 w-5 mr-2"/>
              <span>Type: {consultation.type}</span>
            </div>
          </div>

          <div className="space-y-4">
            <Button variant="primary" icon={Video} className="w-full" disabled={consultation.status !== 'scheduled'}>
              Join Video Call
            </Button>
            <Button variant="outline" icon={MessageSquare} className="w-full">
              Send Message
            </Button>
            <Button variant="outline" icon={FileText} className="w-full">
              View Documents
            </Button>
          </div>
        </div>
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
