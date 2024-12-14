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

  const handleCancel = async (consultationId: string) => {
    try {
      await cancelConsultation(consultationId);
      addNotification('Consultation cancelled successfully', 'success');
    } catch (error) {
      addNotification('Failed to cancel consultation', 'error');
    }
  };

  const handleReschedule = async (consultationId: string) => {
    try {
      // Implement rescheduling logic
      addNotification('Rescheduling feature coming soon', 'info');
    } catch (error) {
      addNotification('Failed to reschedule consultation', 'error');
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const consultations = Array.isArray(consultation) ? consultation : [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Virtual Consultations</h1>
        <Button 
          variant="primary" 
          icon={Plus} 
          onClick={() => setIsBookingModalOpen(true)}
        >
          Schedule Consultation
        </Button>
      </div>

      {consultations.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <Video className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No consultations</h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by scheduling your first consultation
          </p>
          <div className="mt-6">
            <Button
              variant="primary"
              icon={Plus}
              onClick={() => setIsBookingModalOpen(true)}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Upcoming Consultations */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Consultations</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {consultations
                .filter(c => new Date(c.startTime) > new Date() && c.status !== 'cancelled')
                .map(consultation => (
                  <ConsultationCard
                    key={consultation.id}
                    consultation={consultation}
                    onCancel={() => handleCancel(consultation.id)}
                    onReschedule={() => handleReschedule(consultation.id)}
                  />
                ))}
            </div>
          </div>

          {/* Past Consultations */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Past Consultations</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {consultations
                .filter(c => new Date(c.startTime) <= new Date() || c.status === 'cancelled')
                .map(consultation => (
                  <ConsultationCard
                    key={consultation.id}
                    consultation={consultation}
                  />
                ))}
            </div>
          </div>
        </div>
      )}

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceType="virtual-consulting"
      />
    </div>
  );
}