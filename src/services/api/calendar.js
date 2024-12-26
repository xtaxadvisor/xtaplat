import { api } from '../api';
export const calendarService = {
    getEvents: () => api.get('/calendar/events'),
    getEventById: (id) => api.get(`/calendar/events/${id}`),
    createEvent: (data) => api.post('/calendar/events', data),
    updateEvent: ({ id, ...data }) => api.put(`/calendar/events/${id}`, data),
    deleteEvent: (id) => api.delete(`/calendar/events/${id}`),
    getAvailability: (date) => api.get('/calendar/availability?' + new URLSearchParams({ date }).toString()),
    syncCalendar: (provider) => api.post('/calendar/sync', { provider }),
};
