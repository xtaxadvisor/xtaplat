interface FormField {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
}
interface FormProps {
    fields: FormField[];
    onSubmit: (data: Record<string, string>) => void;
    submitText?: string;
    className?: string;
}
export declare function Form({ fields, onSubmit, submitText, className }: FormProps): any;
export {};
