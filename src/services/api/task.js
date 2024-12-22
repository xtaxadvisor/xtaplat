import { api } from '../api';
export const taskService = {
    getAll: () => api.get('/tasks'),
    getById: (id) => api.get(`/tasks/${id}`),
    getByClient: (clientId) => api.get(`/clients/${clientId}/tasks`),
    create: (data) => api.post('/tasks', data),
    update: ({ id, ...data }) => api.put(`/tasks/${id}`, data),
    delete: (id) => api.delete(`/tasks/${id}`),
    updateStatus: (id, status) => api.put(`/tasks/${id}/status`, { status }),
};
