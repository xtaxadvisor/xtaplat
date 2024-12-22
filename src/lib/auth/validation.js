import { validateEmail, validatePassword } from '../../utils/validation';
export function validateLoginCredentials(credentials) {
    const errors = [];
    if (!validateEmail(credentials.email)) {
        errors.push('Invalid email format');
    }
    if (!credentials.password) {
        errors.push('Password is required');
    }
    return errors;
}
export function validateRegistrationData(data) {
    const errors = [];
    if (!data.name || data.name.length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    if (!validateEmail(data.email)) {
        errors.push('Invalid email format');
    }
    const passwordValidation = validatePassword(data.password);
    if (!passwordValidation.isValid) {
        errors.push(...passwordValidation.errors);
    }
    const validRoles = ['client', 'student', 'investor', 'professional'];
    if (!validRoles.includes(data.role)) {
        errors.push('Invalid role selected');
    }
    return errors;
}
