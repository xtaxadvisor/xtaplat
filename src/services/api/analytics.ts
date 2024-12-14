import { api } from '../api';

export interface AnalyticsMetrics {
  revenue: { value: number; change: number };
  clients: { value: number; change: number };
  responseTime: { value: number; change: number };
  satisfaction: { value: number; change: number };
}

export const analyticsService = {
  getAnalytics: (timeRange: string) =>
    api.get<AnalyticsMetrics>('/analytics', { params: { timeRange } }),

  exportAnalytics: (timeRange: string) =>
    api.get<Blob>('/analytics/export', {
      params: { timeRange },
      headers: { Accept: 'text/csv' }
    }),

  getRevenueData: (timeRange: string) =>
    api.get<Array<{ date: string; value: number }>>('/analytics/revenue', {
      params: { timeRange }
    }),

  getClientGrowth: (timeRange: string) =>
    api.get<Array<{ date: string; value: number }>>('/analytics/clients', {
      params: { timeRange }
    })
};