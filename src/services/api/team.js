import { api } from '../api';
export const teamService = {
    getTeamMembers: () => api.get('/team'),
    getTeamMemberById: (id) => api.get(`/team/${id}`),
    addTeamMember: (data) => api.post('/team', data),
    updateTeamMember: ({ id, ...data }) => api.put(`/team/${id}`, data),
    deleteTeamMember: (id) => api.delete(`/team/${id}`)
};
