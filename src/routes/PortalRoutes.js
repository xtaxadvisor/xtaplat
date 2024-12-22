import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
// Lazy load portal components
const AdminPortal = React.lazy(() => import('../pages/admin/AdminPortal'));
const InvestorPortal = React.lazy(() => import('../pages/investor/InvestorPortal'));
const StudentPortal = React.lazy(() => import('../pages/student/StudentPortal'));
export function PortalRoutes() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/admin/*", element: _jsx(React.Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['admin'], children: _jsx(AdminPortal, {}) }) }) }), _jsx(Route, { path: "/investor/*", element: _jsx(React.Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['investor'], children: _jsx(InvestorPortal, {}) }) }) }), _jsx(Route, { path: "/student/*", element: _jsx(React.Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['student'], children: _jsx(StudentPortal, {}) }) }) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] }));
}
