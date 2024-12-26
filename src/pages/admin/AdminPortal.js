import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from '../../components/admin/layout/AdminLayout';
import { AdminDashboard } from '../../components/admin/dashboard/AdminDashboard';
import { TeamManagement } from '../../components/admin/team/TeamManagement';
import { UserManagement } from '../../components/admin/users/UserManagement';
import { SystemLogs } from '../../components/admin/logs/SystemLogs'; // Ensure this path is correct
import { AdminSettings } from '../../components/admin/settings/AdminSettings';
import { NotFoundPage } from '../../components/shared/NotFoundPage';
import { AdminProtectedRoute } from '../../components/admin/auth/AdminProtectedRoute';
export default function AdminPortal() {
    return (_jsx(AdminProtectedRoute, { children: _jsx(AdminLayout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(AdminDashboard, {}) }), _jsx(Route, { path: "/team", element: _jsx(TeamManagement, {}) }), _jsx(Route, { path: "/users", element: _jsx(UserManagement, {}) }), _jsx(Route, { path: "/logs", element: _jsx(SystemLogs, {}) }), _jsx(Route, { path: "/settings", element: _jsx(AdminSettings, {}) }), _jsx(Route, { path: "/404", element: _jsx(NotFoundPage, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/admin/404", replace: true }) })] }) }) }));
}
