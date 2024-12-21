export function validateField(value, rules) {
    for (const rule of rules) {
        if (!rule.validate(value)) {
            return rule.message;
        }
    }
    return null;
}
export const commonValidations = {
    required: {
        validate: (value) => value !== undefined && value !== '',
        message: 'This field is required'
    },
    email: {
        validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: 'Please enter a valid email address'
    },
    phone: {
        validate: (value) => /^\+?[\d\s-()]+$/.test(value),
        message: 'Please enter a valid phone number'
    }
};
