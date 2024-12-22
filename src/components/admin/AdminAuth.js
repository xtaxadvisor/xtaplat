<<<<<<< HEAD
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LoadingSpinner } from '../ui/LoadingSpinner';
export function AdminAuth({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
<<<<<<< HEAD
        return _jsx(LoadingSpinner, {});
    }
    if (!user || user.role !== 'admin') {
        return _jsx(Navigate, { to: "/login", state: { from: location }, replace: true });
    }
    return _jsx(_Fragment, { children: children });
=======
        return <LoadingSpinner />;
    }
    if (!user || user.role !== 'admin') {
        return <Navigate to="/login" state={{ from: location }} replace/>;
    }
    return <>{children}</>;
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
