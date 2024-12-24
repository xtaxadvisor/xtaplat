export interface ValidationRule {
    validate: (value: any) => boolean;
    message: string;
}
export interface FieldValidation {
    [key: string]: ValidationRule[];
}
export declare function validateField(value: any, rules: ValidationRule[]): string | null;
export declare const commonValidations: {
    required: {
        validate: (value: any) => boolean;
        message: string;
    };
    email: {
        validate: (value: string) => boolean;
        message: string;
    };
    phone: {
        validate: (value: string) => boolean;
        message: string;
    };
};
