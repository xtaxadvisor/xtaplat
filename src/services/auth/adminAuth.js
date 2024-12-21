import { z } from 'zod';
import { useNotificationStore } from '../../lib/store';
import { adminSessionManager } from './adminSession';
import { hasRequiredPermissions } from './adminPermissions';
const adminCredentialsSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(8),
    totpCode: z.string().length(6).optional()
});
export class AdminAuthService {
    static instance;
    secretKey = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET || 'default-secret-key');
    API_URL = import.meta.env.VITE_API_URL || '/.netlify/functions';
    constructor() { }
    static getInstance() {
        if (!AdminAuthService.instance) {
            AdminAuthService.instance = new AdminAuthService();
        }
        return AdminAuthService.instance;
    }
    async login(credentials) {
        try {
            const validated = adminCredentialsSchema.parse(credentials);
            console.log('Admin login attempt:', { username: validated.username });
            const response = await fetch(`${this.API_URL}/admin-auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: validated.username,
                    password: validated.password,
                    totpCode: validated.totpCode
                })
            });
            if (!response.ok) {
                console.error('Admin login failed:', response.statusText);
                return false;
            }
            const data = await response.json();
            await adminSessionManager.createSession(data.user.id, data.user.permissions);
            console.log('Admin login successful');
            return true;
        }
        catch (error) {
            console.error('Admin login error:', error);
            useNotificationStore.getState().addNotification('Invalid admin credentials', 'error');
            return false;
        }
    }
    async validateAccess(requiredPermissions = []) {
        try {
            const session = await adminSessionManager.validateSession();
            console.log('Session validation:', { session, requiredPermissions });
            if (!session) {
                console.log('Session validation failed: No valid session');
                return false;
            }
            const hasPermissions = hasRequiredPermissions(session.permissions, requiredPermissions);
            console.log('Permission check:', { hasPermissions });
            return hasPermissions;
        }
        catch (error) {
            console.error('Access validation error:', error);
            return false;
        }
    }
    async getCurrentSession() {
        return adminSessionManager.validateSession();
    }
    logout() {
        console.log('Admin logout');
        adminSessionManager.clearSession();
    }
}
export const adminAuthService = AdminAuthService.getInstance();
