import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { calendarService } from '../services/api/calendar';
import { useNotificationStore } from '../lib/store';

export function useCalendar() {
  const queryClient = useQueryClient();
  const { addNotification } = useNotificationStore();

  const { data: events, isLoading } = useQuery({
    queryKey: ['calendar-events'],
    queryFn: calendarService.getEvents
  });

  const createEventMutation = useMutation({
    mutationFn: calendarService.createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['calendar-events'] });
      addNotification('Event created successfully', 'success');
    },
    onError: () => {
      addNotification('Failed to create event', 'error');
    }
  });

  const updateEventMutation = useMutation({
    mutationFn: calendarService.updateEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['calendar-events'] });
      addNotification('Event updated successfully', 'success');
    },
    onError: () => {
      addNotification('Failed to update event', 'error');
    }
  });

  const deleteEventMutation = useMutation({
    mutationFn: calendarService.deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['calendar-events'] });
      addNotification('Event deleted successfully', 'success');
    },
    onError: () => {
      addNotification('Failed to delete event', 'error');
    }
  });

  return {
    events,
    isLoading,
    createEvent: createEventMutation.mutate,
    updateEvent: updateEventMutation.mutate,
    deleteEvent: deleteEventMutation.mutate
  };
}