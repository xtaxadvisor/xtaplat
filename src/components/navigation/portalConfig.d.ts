import type { LucideIcon } from 'lucide-react';
export interface PortalConfig {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    path: string;
    requiredRole?: string[];
    features: string[];
    notifications?: boolean;
    messaging?: boolean;
    documents?: boolean;
}
export declare const PORTAL_CONFIGS: Record<string, PortalConfig>;
export declare function getPortalConfig(portalId: string): PortalConfig | undefined;
export declare function getAvailablePortals(userRole?: string): PortalConfig[];
