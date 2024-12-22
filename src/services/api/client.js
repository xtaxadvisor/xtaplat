import { api } from '../api';
export const clientService = {
    getAll: () => api.get('/clients'),
    getById: (id) => api.get(`/clients/${id}`),
    create: (data) => api.post('/clients', data),
    update: ({ id, ...data }) => api.put(`/clients/${id}`, data),
    delete: (id) => api.delete(`/clients/${id}`),
    search: (query) => api.get('/clients/search', { params: { query } }),
};
