interface TeamMemberFormProps {
    initialData?: {
        id?: string;
        name: string;
        role: string;
        description: string;
        image: string;
        email?: string;
        linkedin?: string;
        website?: string;
    };
    onSubmit: (data: any) => void;
    onCancel: () => void;
}
export declare function TeamMemberForm({ initialData, onSubmit, onCancel }: TeamMemberFormProps): any;
export {};
