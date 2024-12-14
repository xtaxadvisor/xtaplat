import { z } from 'zod';
import { jwtVerify, SignJWT } from 'jose';
import { AdminPermissions } from './adminPermissions';

const SESSION_DURATION = 60 * 60; // 1 hour in seconds

export const AdminSessionSchema = z.object({
  id: z.string(),
  role: z.literal('admin'),
  permissions: z.array(z.enum(Object.values(AdminPermissions) as [string, ...string[]])),
  exp: z.number(),
  iat: z.number(),
  lastActive: z.number()
});

export type AdminSession = z.infer<typeof AdminSessionSchema>;

export class AdminSessionManager {
  private static instance: AdminSessionManager;
  private readonly secretKey: Uint8Array;
  private readonly sessionKey = 'admin_session';

  private constructor() {
    this.secretKey = new TextEncoder().encode(
      import.meta.env.VITE_JWT_SECRET || 'default-secret-key'
    );
  }

  static getInstance(): AdminSessionManager {
    if (!AdminSessionManager.instance) {
      AdminSessionManager.instance = new AdminSessionManager();
    }
    return AdminSessionManager.instance;
  }

  async createSession(adminId: string, permissions: string[]): Promise<string> {
    const now = Math.floor(Date.now() / 1000);
    
    const token = await new SignJWT({
      role: 'admin',
      permissions,
      lastActive: now
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setSubject(adminId)
      .setIssuedAt(now)
      .setExpirationTime(now + SESSION_DURATION)
      .sign(this.secretKey);

    localStorage.setItem(this.sessionKey, token);
    return token;
  }

  async validateSession(): Promise<AdminSession | null> {
    const token = localStorage.getItem(this.sessionKey);
    if (!token) return null;

    try {
      const { payload } = await jwtVerify(token, this.secretKey);
      const session = AdminSessionSchema.parse(payload);

      // Check if session is expired
      if (session.exp < Date.now() / 1000) {
        this.clearSession();
        return null;
      }

      // Update last active timestamp
      await this.refreshSession(token);
      return session;
    } catch (error) {
      this.clearSession();
      return null;
    }
  }

  private async refreshSession(token: string): Promise<void> {
    try {
      const { payload } = await jwtVerify(token, this.secretKey);
      const session = AdminSessionSchema.parse(payload);

      // Only refresh if more than 5 minutes have passed
      const fiveMinutesAgo = (Date.now() / 1000) - 300;
      if (session.lastActive < fiveMinutesAgo) {
        const newToken = await this.createSession(
          session.id,
          session.permissions
        );
        localStorage.setItem(this.sessionKey, newToken);
      }
    } catch {
      this.clearSession();
    }
  }

  clearSession(): void {
    localStorage.removeItem(this.sessionKey);
  }
}

export const adminSessionManager = AdminSessionManager.getInstance();