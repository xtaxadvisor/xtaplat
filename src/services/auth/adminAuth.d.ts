import { type AdminSession } from './adminSession';
export declare class AdminAuthService {
    private static instance;
    private readonly secretKey;
    private readonly API_URL;
    private constructor();
    static getInstance(): AdminAuthService;
    login(credentials: {
        username: string;
        password: string;
        totpCode?: string;
    }): Promise<boolean>;
    validateAccess(requiredPermissions?: string[]): Promise<boolean>;
    getCurrentSession(): Promise<AdminSession | null>;
    logout(): void;
}
export declare const adminAuthService: AdminAuthService;
