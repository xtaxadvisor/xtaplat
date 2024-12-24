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
export declare const teamService: {
    getTeamMembers: () => Promise<TeamMember[]>;
    getTeamMemberById: (id: string) => Promise<TeamMember>;
    addTeamMember: (data: CreateTeamMemberDTO) => Promise<TeamMember>;
    updateTeamMember: ({ id, ...data }: UpdateTeamMemberDTO) => Promise<TeamMember>;
    deleteTeamMember: (id: string) => Promise<void>;
};
