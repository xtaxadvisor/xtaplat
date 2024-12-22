import { api } from '../api';
export const analyticsService = {
    getAnalytics: (timeRange) => api.get('/analytics', { params: { timeRange } }),
    exportAnalytics: (timeRange) => api.get('/analytics/export', {
        params: { timeRange },
        headers: { Accept: 'text/csv' }
    }),
    getRevenueData: (timeRange) => api.get('/analytics/revenue', {
        params: { timeRange }
    }),
    getClientGrowth: (timeRange) => api.get('/analytics/clients', {
        params: { timeRange }
    })
};
