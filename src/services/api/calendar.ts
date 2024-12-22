import { api } from '../api';

export interface Event {
  id: string;
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  type: 'meeting' | 'deadline' | 'reminder';
  location?: string;
  isVirtual?: boolean;
  meetingLink?: string;
  attendees?: Array<{
    id: string;
    name: string;
    email: string;
    status: 'pending' | 'accepted' | 'declined';
  }>;
  reminders?: Array<{
    type: 'email' | 'notification';
    time: number; // minutes before event
  }>;
}

export interface CreateEventDTO {
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  type: Event['type'];
  location?: string;
  isVirtual?: boolean;
  meetingLink?: string;
  attendees?: string[];
  reminders?: Event['reminders'];
}

export interface UpdateEventDTO extends Partial<CreateEventDTO> {
  id: string;
}

export const calendarService = {
  getEvents: () => 
    api.get<Event[]>('/calendar/events'),

  getEventById: (id: string) => 
    api.get<Event>(`/calendar/events/${id}`),

  createEvent: (data: CreateEventDTO) => 
    api.post<Event>('/calendar/events', data),

  updateEvent: ({ id, ...data }: UpdateEventDTO) => 
    api.put<Event>(`/calendar/events/${id}`, data),

  deleteEvent: (id: string) => 
    api.delete<void>(`/calendar/events/${id}`),

  getAvailability: (date: string) => 
    api.get<Array<{ start: string; end: string }>>('/calendar/availability?' + new URLSearchParams({ date }).toString()),

  syncCalendar: (provider: string) => 
    api.post<void>('/calendar/sync', { provider }),
};