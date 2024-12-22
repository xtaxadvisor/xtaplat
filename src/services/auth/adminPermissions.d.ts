export declare const AdminPermissions: {
    readonly VIEW_DASHBOARD: "view:dashboard";
    readonly MANAGE_USERS: "manage:users";
    readonly MANAGE_SETTINGS: "manage:settings";
    readonly MANAGE_BILLING: "manage:billing";
    readonly VIEW_ANALYTICS: "view:analytics";
    readonly MANAGE_DOCUMENTS: "manage:documents";
    readonly SYSTEM_SETTINGS: "manage:system";
    readonly AUDIT_LOGS: "view:audit-logs";
};
export type AdminPermission = keyof typeof AdminPermissions;
export declare const DEFAULT_ADMIN_PERMISSIONS: ("view:dashboard" | "view:analytics")[];
export declare const SUPER_ADMIN_PERMISSIONS: ("view:dashboard" | "manage:users" | "manage:settings" | "manage:billing" | "view:analytics" | "manage:documents" | "manage:system" | "view:audit-logs")[];
export declare function hasRequiredPermissions(userPermissions: string[], requiredPermissions: string[]): boolean;
