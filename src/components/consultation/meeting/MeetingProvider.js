import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { VirtualConsultation } from './VirtualConsultation';
import { MeetingPreview } from './MeetingPreview';
import { useConsultation } from '../../../hooks/useConsultation';
import { useNotificationStore } from '../../../lib/store';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
export function MeetingProvider({ consultationId, onEnd }) {
    const [isInMeeting, setIsInMeeting] = useState(false);
    const { consultation, updateConsultation } = useConsultation(consultationId);
    const { addNotification } = useNotificationStore();
    const navigate = useNavigate();
    const { user } = useAuth();
    if (!consultation) {
        return null;
    }
    // Check if user has access to this consultation
    const hasAccess = user?.role === 'professional' ||
        consultation.clientId === user?.id ||
        consultation.professionalId === user?.id;
    if (!hasAccess) {
        addNotification('You do not have access to this consultation', 'error');
        navigate('/dashboard');
        return null;
    }
    const handleJoinMeeting = async () => {
        try {
            await updateConsultation({
                id: consultationId,
                status: 'in-progress'
            });
            setIsInMeeting(true);
        }
        catch (error) {
            addNotification('Failed to join meeting', 'error');
        }
    };
    const handleEndMeeting = async () => {
        try {
            await updateConsultation({
                id: consultationId,
                status: 'completed'
            });
            onEnd();
        }
        catch (error) {
            addNotification('Failed to end meeting', 'error');
        }
    };
    if (!isInMeeting) {
        return (_jsx(MeetingPreview, { onJoin: handleJoinMeeting, onCancel: onEnd }));
    }
    return (_jsx(VirtualConsultation, { consultationId: consultationId, onEnd: handleEndMeeting }));
}
