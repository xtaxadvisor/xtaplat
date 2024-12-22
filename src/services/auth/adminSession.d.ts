import { z } from 'zod';
export declare const AdminSessionSchema: any;
export type AdminSession = z.infer<typeof AdminSessionSchema>;
export declare class AdminSessionManager {
    private static instance;
    private readonly secretKey;
    private readonly sessionKey;
    private constructor();
    static getInstance(): AdminSessionManager;
    createSession(adminId: string, permissions: string[]): Promise<string>;
    validateSession(): Promise<AdminSession | null>;
    private refreshSession;
    clearSession(): void;
}
export declare const adminSessionManager: AdminSessionManager;
