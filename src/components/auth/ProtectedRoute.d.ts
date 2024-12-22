import React from 'react';
interface ProtectedRouteProps {
    children: React.ReactNode;
    requiredRole?: string[];
}
export declare function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps): any;
export {};
