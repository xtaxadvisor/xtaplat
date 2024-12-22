import { api } from '../api';
export const investmentForumService = {
    getThreads: (category) => api.get('/investment-forum/threads', {
        params: { category }
    }),
    getThreadById: (id) => api.get(`/investment-forum/threads/${id}`),
    createThread: (data) => api.post('/investment-forum/threads', data),
    updateThread: (id, data) => api.put(`/investment-forum/threads/${id}`, data),
    deleteThread: (id) => api.delete(`/investment-forum/threads/${id}`)
};
