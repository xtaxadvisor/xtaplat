import type { User } from '../../types';
export interface LoginCredentials {
    email: string;
    password: string;
}
export interface RegisterData extends LoginCredentials {
    name: string;
    role: string;
}
export interface AuthResponse {
    user: User;
    token: string;
}
export declare const authService: {
    login: (credentials: LoginCredentials) => Promise<AuthResponse>;
    register: (data: RegisterData) => Promise<AuthResponse>;
    logout: () => Promise<void>;
    getCurrentUser: () => Promise<User>;
    refreshToken: () => Promise<{
        token: string;
    }>;
    updatePassword: (oldPassword: string, newPassword: string) => Promise<void>;
};
