import { api } from '../api';
import type { TeamMember } from '../../types/team';

export interface CreateTeamMemberDTO {
  name: string;
  role: string;
  description: string;
  image: string;
  email?: string;
  linkedin?: string;
  website?: string;
}

export interface UpdateTeamMemberDTO extends Partial<CreateTeamMemberDTO> {
  id: string;
}

export const teamService = {
  getTeamMembers: () => 
    api.get<TeamMember[]>('/team'),

  getTeamMemberById: (id: string) => 
    api.get<TeamMember>(`/team/${id}`),

  addTeamMember: (data: CreateTeamMemberDTO) => 
    api.post<TeamMember>('/team', data),

  updateTeamMember: ({ id, ...data }: UpdateTeamMemberDTO) => 
    api.put<TeamMember>(`/team/${id}`, data),

  deleteTeamMember: (id: string) => 
    api.delete<void>(`/team/${id}`)
};