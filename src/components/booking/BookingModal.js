<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Modal } from '../ui/Modal';
import { BookingForm } from './BookingForm';
import { useConsultation } from '../../hooks/useConsultation';
import { useNotificationStore } from '../../lib/store';
import { useNavigate } from 'react-router-dom';
export function BookingModal({ isOpen, onClose, serviceType }) {
    const { scheduleConsultation, isScheduling } = useConsultation();
    const { addNotification } = useNotificationStore();
    const navigate = useNavigate();
    const handleSubmit = async (data) => {
        try {
            await scheduleConsultation(data);
            addNotification('Consultation scheduled successfully', 'success');
            onClose();
            navigate('/dashboard/consultations');
        }
        catch (error) {
            addNotification('Failed to schedule consultation', 'error');
        }
    };
<<<<<<< HEAD
    return (_jsx(Modal, { isOpen: isOpen, onClose: onClose, title: "Schedule Consultation", children: _jsx(BookingForm, { serviceType: serviceType, onSubmit: handleSubmit, onCancel: onClose }) }));
=======
    return (<Modal isOpen={isOpen} onClose={onClose} title="Schedule Consultation">
      <BookingForm serviceType={serviceType} onSubmit={handleSubmit} onCancel={onClose}/>
    </Modal>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
