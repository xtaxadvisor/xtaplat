import { api, ApiRequestOptions } from '../api';

export interface AnalyticsMetrics {
  revenue: { value: number; change: number };
  clients: { value: number; change: number };
  responseTime: { value: number; change: number };
  satisfaction: { value: number; change: number };
}

export const analyticsService = {
  getAnalytics: (timeRange: string) =>
<<<<<<< HEAD
    api.get<AnalyticsMetrics>('/analytics', { queryParams: { timeRange } } as any),

  exportAnalytics: (timeRange: string) =>
    api.get<Blob>('/analytics/export', {
      queryParams: { timeRange },
=======
    api.get<AnalyticsMetrics>('/analytics', { params: { timeRange } } as ApiRequestOptions),

  exportAnalytics: (timeRange: string) =>
    api.get<Blob>('/analytics/export', { 
      params: { timeRange },
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
      headers: { Accept: 'text/csv' }
    } as ApiRequestOptions),

  getRevenueData: (timeRange: string) =>
<<<<<<< HEAD
    api.get<Array<{ date: string; value: number }>>('/analytics/revenue', {
      queryParams: { timeRange }
    }),

  getClientGrowth: (timeRange: string) =>
    api.get<Array<{ date: string; value: number }>>('/analytics/clients', {
      queryParams: { timeRange },
      headers: { 'Content-Type': 'application/json' }
    })
=======
    api.get<Array<{ date: string; value: number }>>('/analytics/revenue', { 
      params: { timeRange } 
    } as ApiRequestOptions),

  getClientGrowth: (timeRange: string) =>
    api.get<Array<{ date: string; value: number }>>('/analytics/clients', { 
      params: { timeRange } 
    } as ApiRequestOptions)
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
};