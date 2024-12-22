import { api } from '../api';
export const settingsService = {
    getSettings: () => api.get('/settings'),
    updateSettings: ({ section, data }) => api.put(`/settings/${section}`, data),
    exportSettings: () => api.get('/settings/export', {
        headers: { Accept: 'application/json' }
    }),
    importSettings: (data) => api.post('/settings/import', data),
};
