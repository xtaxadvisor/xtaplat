import { api } from '../api';

export interface InvestmentThread {
  id: string;
  title: string;
  content: string;
  category: 'real-estate' | 'maintenance' | 'market-analysis' | 'property-management';
  author: {
    id: string;
    name: string;
    role: string;
  };
  createdAt: string;
  updatedAt: string;
  replies: number;
  views: number;
  tags: string[];
  isPinned: boolean;
}

export const investmentForumService = {
  getThreads: (category?: string) => 
    api.get<InvestmentThread[]>('/investment-forum/threads', {
      params: { category }
    }),

  getThreadById: (id: string) =>
    api.get<InvestmentThread>(`/investment-forum/threads/${id}`),

  createThread: (data: Omit<InvestmentThread, 'id' | 'createdAt' | 'updatedAt' | 'replies' | 'views'>) =>
    api.post<InvestmentThread>('/investment-forum/threads', data),

  updateThread: (id: string, data: Partial<InvestmentThread>) =>
    api.put<InvestmentThread>(`/investment-forum/threads/${id}`, data),

  deleteThread: (id: string) =>
    api.delete<void>(`/investment-forum/threads/${id}`)
};