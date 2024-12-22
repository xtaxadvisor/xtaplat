import { api } from '../api';
export const consultationService = {
    getAll: () => api.get('/consultations'),
    getById: (id) => api.get(`/consultations/${id}`),
    getByClient: (clientId) => api.get(`/clients/${clientId}/consultations`),
    getByProfessional: (professionalId) => api.get(`/professionals/${professionalId}/consultations`),
    schedule: (data) => api.post('/consultations', data),
    update: ({ id, ...data }) => api.put(`/consultations/${id}`, data),
    cancel: (id, reason) => api.put(`/consultations/${id}/cancel`, { reason }),
    generateMeetingLink: (id) => api.post(`/consultations/${id}/meeting-link`),
    uploadDocument: (id, file) => {
        const formData = new FormData();
        formData.append('document', file);
        return api.post(`/consultations/${id}/documents`, formData);
    },
    getRecording: (id) => api.get(`/consultations/${id}/recording`),
};
