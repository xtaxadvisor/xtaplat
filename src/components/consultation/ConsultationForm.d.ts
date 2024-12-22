interface ConsultationFormProps {
    onSubmit: (data: any) => void;
    onCancel: () => void;
    professionals?: Array<{
        id: string;
        name: string;
    }>;
}
export declare function ConsultationForm({ onSubmit, onCancel, professionals }: ConsultationFormProps): any;
export {};
