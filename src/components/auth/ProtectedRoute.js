<<<<<<< HEAD
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LoadingSpinner } from '../ui/LoadingSpinner';
export function ProtectedRoute({ children, requiredRole }) {
    const { user, loading, isAuthenticated } = useAuth();
    const location = useLocation();
    if (loading) {
<<<<<<< HEAD
        return _jsx(LoadingSpinner, {});
    }
    if (!isAuthenticated) {
        return _jsx(Navigate, { to: "/login", state: { from: location }, replace: true });
    }
    if (requiredRole && user && !requiredRole.includes(user.role)) {
        return _jsx(Navigate, { to: "/unauthorized", replace: true });
    }
    return _jsx(_Fragment, { children: children });
=======
        return <LoadingSpinner />;
    }
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace/>;
    }
    if (requiredRole && user && !requiredRole.includes(user.role)) {
        return <Navigate to="/unauthorized" replace/>;
    }
    return <>{children}</>;
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
