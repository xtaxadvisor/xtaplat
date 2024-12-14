import { mockThreads } from '../../data/mockForumData';
import type { InvestmentThread } from '../api/investmentForum';

export const mockInvestmentForumService = {
  getThreads: async (category?: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    
    if (category && category !== 'all') {
      return mockThreads.filter(thread => thread.category === category);
    }
    return mockThreads;
  },

  getThreadById: async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const thread = mockThreads.find(t => t.id === id);
    if (!thread) throw new Error('Thread not found');
    return thread;
  },

  createThread: async (data: Omit<InvestmentThread, 'id' | 'createdAt' | 'updatedAt' | 'replies' | 'views'>) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newThread: InvestmentThread = {
      id: `${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      replies: 0,
      views: 0,
      ...data
    };
    return newThread;
  },

  updateThread: async (id: string, data: Partial<InvestmentThread>) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    const threadIndex = mockThreads.findIndex(t => t.id === id);
    if (threadIndex === -1) throw new Error('Thread not found');
    
    const updatedThread = {
      ...mockThreads[threadIndex],
      ...data,
      updatedAt: new Date().toISOString()
    };
    return updatedThread;
  },

  deleteThread: async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const threadIndex = mockThreads.findIndex(t => t.id === id);
    if (threadIndex === -1) throw new Error('Thread not found');
  }
};