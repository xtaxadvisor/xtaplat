import type { ThreadCategory } from '../../types/discussion';
interface ThreadFormProps {
    onSubmit: (data: {
        title: string;
        content: string;
        category: ThreadCategory;
        tags: string[];
    }) => void;
    onCancel?: () => void;
    isSubmitting?: boolean;
}
export declare function ThreadForm({ onSubmit, onCancel, isSubmitting }: ThreadFormProps): any;
export {};
