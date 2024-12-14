export const AdminPermissions = {
  VIEW_DASHBOARD: 'view:dashboard',
  MANAGE_USERS: 'manage:users',
  MANAGE_SETTINGS: 'manage:settings',
  MANAGE_BILLING: 'manage:billing',
  VIEW_ANALYTICS: 'view:analytics',
  MANAGE_DOCUMENTS: 'manage:documents',
  SYSTEM_SETTINGS: 'manage:system',
  AUDIT_LOGS: 'view:audit-logs'
} as const;

export type AdminPermission = keyof typeof AdminPermissions;

export const DEFAULT_ADMIN_PERMISSIONS = [
  AdminPermissions.VIEW_DASHBOARD,
  AdminPermissions.VIEW_ANALYTICS
];

export const SUPER_ADMIN_PERMISSIONS = Object.values(AdminPermissions);

export function hasRequiredPermissions(
  userPermissions: string[],
  requiredPermissions: string[]
): boolean {
  return requiredPermissions.every(permission => 
    userPermissions.includes(permission)
  );
}