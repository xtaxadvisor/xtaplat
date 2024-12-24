import type { TeamMember as TeamMemberType } from '../../types/team';
interface TeamMemberProps extends TeamMemberType {
    onEdit?: (member: TeamMemberType) => void;
    onDelete?: (id: string) => void;
    isAdmin?: boolean;
}
export declare function TeamMember({ id, name, role, description, image, email, linkedin, website, onEdit, onDelete, isAdmin }: TeamMemberProps): any;
export {};
