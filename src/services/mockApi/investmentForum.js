import { mockThreads } from '../../data/mockForumData';
export const mockInvestmentForumService = {
    getThreads: async (category) => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        if (category && category !== 'all') {
            return mockThreads.filter(thread => thread.category === category);
        }
        return mockThreads;
    },
    getThreadById: async (id) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const thread = mockThreads.find(t => t.id === id);
        if (!thread)
            throw new Error('Thread not found');
        return thread;
    },
    createThread: async (data) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const newThread = {
            id: `${Date.now()}`,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            replies: 0,
            views: 0,
            ...data
        };
        return newThread;
    },
    updateThread: async (id, data) => {
        await new Promise(resolve => setTimeout(resolve, 800));
        const threadIndex = mockThreads.findIndex(t => t.id === id);
        if (threadIndex === -1)
            throw new Error('Thread not found');
        const updatedThread = {
            ...mockThreads[threadIndex],
            ...data,
            updatedAt: new Date().toISOString()
        };
        return updatedThread;
    },
    deleteThread: async (id) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const threadIndex = mockThreads.findIndex(t => t.id === id);
        if (threadIndex === -1)
            throw new Error('Thread not found');
    }
};
