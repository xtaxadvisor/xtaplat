import { api } from '../api';
export const analyticsService = {
    getAnalytics: (timeRange) => api.get('/analytics', { queryParams: { timeRange } }),
    exportAnalytics: (timeRange) => api.get('/analytics/export', {
        queryParams: { timeRange },
        headers: { Accept: 'text/csv' }
    }),
    getRevenueData: (timeRange) => api.get('/analytics/revenue', {
        queryParams: { timeRange }
    }),
    getClientGrowth: (timeRange) => api.get('/analytics/clients', {
        queryParams: { timeRange },
        headers: { 'Content-Type': 'application/json' }
    })
};
