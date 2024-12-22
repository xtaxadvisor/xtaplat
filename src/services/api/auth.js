import { api } from '../api';
export const authService = {
    login: (credentials) => api.post('/auth/login', credentials),
    register: (data) => api.post('/auth/register', data),
    logout: () => api.post('/auth/logout'),
    getCurrentUser: () => api.get('/auth/me'),
    refreshToken: () => api.post('/auth/refresh'),
    updatePassword: (oldPassword, newPassword) => api.put('/auth/password', { oldPassword, newPassword }),
};
