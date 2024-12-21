import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LoadingSpinner } from '../ui/LoadingSpinner';
export function ProtectedRoute({ children, requiredRole }) {
    const { user, loading, isAuthenticated } = useAuth();
    const location = useLocation();
    if (loading) {
        return <LoadingSpinner />;
    }
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace/>;
    }
    if (requiredRole && user && !requiredRole.includes(user.role)) {
        return <Navigate to="/unauthorized" replace/>;
    }
    return <>{children}</>;
}
