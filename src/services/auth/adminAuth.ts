import { z } from 'zod';
import { jwtVerify } from 'jose';
import { useNotificationStore } from '../../lib/store';
import { adminSessionManager, type AdminSession } from './adminSession';
import { hasRequiredPermissions } from './adminPermissions';
import { createSecureHash } from '../../utils/crypto';

const adminCredentialsSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
  totpCode: z.string().length(6).optional()
});

export class AdminAuthService {
  private static instance: AdminAuthService;
  private readonly secretKey = new TextEncoder().encode(
    import.meta.env.VITE_JWT_SECRET || 'default-secret-key'
  );
  private readonly API_URL = import.meta.env.VITE_API_URL || '/.netlify/functions';

  private constructor() {}

  static getInstance(): AdminAuthService {
    if (!AdminAuthService.instance) {
      AdminAuthService.instance = new AdminAuthService();
    }
    return AdminAuthService.instance;
  }

  async login(credentials: {
    username: string;
    password: string;
    totpCode?: string;
  }): Promise<boolean> {
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
    } catch (error) {
      console.error('Admin login error:', error);
      useNotificationStore.getState().addNotification(
        'Invalid admin credentials',
        'error'
      );
      return false;
    }
  }

  async validateAccess(requiredPermissions: string[] = []): Promise<boolean> {
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
    } catch (error) {
      console.error('Access validation error:', error);
      return false;
    }
  }

  async getCurrentSession(): Promise<AdminSession | null> {
    return adminSessionManager.validateSession();
  }

  logout(): void {
    console.log('Admin logout');
    adminSessionManager.clearSession();
  }
}

export const adminAuthService = AdminAuthService.getInstance();