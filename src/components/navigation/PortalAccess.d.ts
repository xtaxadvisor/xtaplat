import React from 'react';
interface PortalButtonProps {
    title: string;
    description: string;
    icon: React.ComponentType;
    path: string;
    requiredRole?: string[];
}
export declare function PortalButton({ title, description, icon: Icon, path, requiredRole }: PortalButtonProps): any;
export declare function PortalAccess(): any;
export {};
