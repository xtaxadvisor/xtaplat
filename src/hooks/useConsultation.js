import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { consultationService } from '../services/api/consultation';
import { useNotificationStore } from '../lib/store';
import { useAuth } from '../contexts/AuthContext';
export function useConsultation(consultationId) {
    const queryClient = useQueryClient();
    const { addNotification } = useNotificationStore();
    const { user } = useAuth();
    const { data: consultation, isLoading } = useQuery({
        queryKey: ['consultation', consultationId],
        queryFn: async () => {
            try {
                return await consultationService.getById(consultationId);
            }
            catch (error) {
                addNotification('Failed to load consultation details', 'error');
                throw error;
            }
        },
        enabled: !!consultationId
    });
    const scheduleMutation = useMutation({
        mutationFn: (data) => consultationService.schedule(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['consultations'] });
            addNotification('Consultation scheduled successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to schedule consultation', 'error');
        }
    });
    const updateMutation = useMutation({
        mutationFn: (data) => consultationService.update(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['consultations'] });
            queryClient.invalidateQueries({ queryKey: ['consultation', consultationId] });
            addNotification('Consultation updated successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to update consultation', 'error');
        }
    });
    const cancelMutation = useMutation({
        mutationFn: (reason) => consultationService.cancel(consultationId, reason),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['consultations'] });
            queryClient.invalidateQueries({ queryKey: ['consultation', consultationId] });
            addNotification('Consultation cancelled successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to cancel consultation', 'error');
        }
    });
    const generateMeetingLinkMutation = useMutation({
        mutationFn: () => consultationService.generateMeetingLink(consultationId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['consultation', consultationId] });
            addNotification('Meeting link generated successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to generate meeting link', 'error');
        }
    });
    // Check if user has access to this consultation
    const hasAccess = consultation && user && (user.role === 'professional' ||
        consultation.clientId === user.id ||
        consultation.professionalId === user.id);
    return {
        consultation: hasAccess ? consultation : null,
        isLoading,
        scheduleConsultation: scheduleMutation.mutate,
        updateConsultation: updateMutation.mutate,
        cancelConsultation: cancelMutation.mutate,
        generateMeetingLink: generateMeetingLinkMutation.mutate,
        isScheduling: scheduleMutation.isLoading,
        isUpdating: updateMutation.isLoading,
        isCancelling: cancelMutation.isLoading,
        hasAccess
    };
}
