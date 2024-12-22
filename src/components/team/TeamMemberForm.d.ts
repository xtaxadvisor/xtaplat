import type { TeamMember } from '../../types/team';
interface TeamMemberFormProps {
    initialData?: Partial<TeamMember>;
    onSubmit: (data: Omit<TeamMember, 'id'>) => void;
    onCancel: () => void;
}
export declare function TeamMemberForm({ initialData, onSubmit, onCancel }: TeamMemberFormProps): any;
export {};
