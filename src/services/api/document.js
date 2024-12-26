import { api } from '../api';
export const documentService = {
    getAll: () => api.get('/documents'),
    getById: (id) => api.get(`/documents/${id}`),
    getByClient: (clientId) => api.get(`/clients/${clientId}/documents`),
    create: (data) => api.post('/documents', data),
    update: ({ id, ...data }) => api.put(`/documents/${id}`, data),
    delete: (id) => api.delete(`/documents/${id}`),
    search: (query) => api.get(`/documents/search?query=${encodeURIComponent(query)}`),
};
