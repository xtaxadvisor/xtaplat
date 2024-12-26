import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Plus, Video } from 'lucide-react';
import { ConsultationCard } from './ConsultationCard';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { useConsultation } from '../../hooks/useConsultation';
import { useNotificationStore } from '../../lib/store';
import { Button } from '../ui/Button';
import { BookingModal } from '../booking/BookingModal';
export function ConsultationList() {
    const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false);
    const { consultation, isLoading, cancelConsultation } = useConsultation();
    const { addNotification } = useNotificationStore();
    const handleCancel = async (consultationId) => {
        try {
            await cancelConsultation(consultationId);
            addNotification('Consultation cancelled successfully', 'success');
        }
        catch (error) {
            addNotification('Failed to cancel consultation', 'error');
        }
    };
    const handleReschedule = async (consultationId) => {
        try {
            // Implement rescheduling logic
            addNotification('Rescheduling feature coming soon', 'info');
        }
        catch (error) {
            addNotification('Failed to reschedule consultation', 'error');
        }
    };
    if (isLoading) {
        return _jsx(LoadingSpinner, {});
    }
    const consultations = Array.isArray(consultation) ? consultation : [];
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Virtual Consultations" }), _jsx(Button, { variant: "primary", icon: Plus, onClick: () => setIsBookingModalOpen(true), children: "Schedule Consultation" })] }), consultations.length === 0 ? (_jsxs("div", { className: "text-center py-12 bg-white rounded-lg shadow", children: [_jsx(Video, { className: "mx-auto h-12 w-12 text-gray-400" }), _jsx("h3", { className: "mt-2 text-sm font-medium text-gray-900", children: "No consultations" }), _jsx("p", { className: "mt-1 text-sm text-gray-500", children: "Get started by scheduling your first consultation" }), _jsx("div", { className: "mt-6", children: _jsx(Button, { variant: "primary", icon: Plus, onClick: () => setIsBookingModalOpen(true), children: "Schedule Consultation" }) })] })) : (_jsxs("div", { className: "space-y-8", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Upcoming Consultations" }), _jsx("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-2", children: consultations
                                    .filter(c => new Date(c.startTime) > new Date() && c.status !== 'cancelled')
                                    .map(consultation => (_jsx(ConsultationCard, { consultation: consultation, onCancel: () => handleCancel(consultation.id), onReschedule: () => handleReschedule(consultation.id) }, consultation.id))) })] }), _jsxs("div", { children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Past Consultations" }), _jsx("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-2", children: consultations
                                    .filter(c => new Date(c.startTime) <= new Date() || c.status === 'cancelled')
                                    .map(consultation => (_jsx(ConsultationCard, { consultation: consultation }, consultation.id))) })] })] })), _jsx(BookingModal, { isOpen: isBookingModalOpen, onClose: () => setIsBookingModalOpen(false), serviceType: "virtual-consulting" })] }));
}
