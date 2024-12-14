export interface ValidationRule {
  validate: (value: any) => boolean;
  message: string;
}

export interface FieldValidation {
  [key: string]: ValidationRule[];
}

export function validateField(value: any, rules: ValidationRule[]): string | null {
  for (const rule of rules) {
    if (!rule.validate(value)) {
      return rule.message;
    }
  }
  return null;
}

export const commonValidations = {
  required: {
    validate: (value: any) => value !== undefined && value !== '',
    message: 'This field is required'
  },
  email: {
    validate: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message: 'Please enter a valid email address'
  },
  phone: {
    validate: (value: string) => /^\+?[\d\s-()]+$/.test(value),
    message: 'Please enter a valid phone number'
  }
};