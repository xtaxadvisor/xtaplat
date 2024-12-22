<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate } from 'react-router-dom';
=======
import React from 'react';
import { Routes, Route } from 'react-router-dom';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { AdminProtectedRoute } from '../components/admin/auth/AdminProtectedRoute';
import { AdminDashboard } from '../components/admin/AdminDashboard';
import { AdminLayout } from '../components/admin/AdminLayout';
import { AdminLoginForm } from '../components/admin/auth/AdminLoginForm';
import { TeamManagement } from '../components/admin/team/TeamManagement';
<<<<<<< HEAD
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
export function AdminRoutes() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(AdminLoginForm, {}) }), _jsx(Route, { path: "/*", element: _jsx(AdminProtectedRoute, { children: _jsxs(AdminLayout, { children: [_jsx(Breadcrumbs, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(AdminDashboard, {}) }), _jsx(Route, { path: "/team", element: _jsx(TeamManagement, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] })] }) }) })] }));
=======
import AIMonitoringDashboard from '../pages/admin/AIMonitoringDashboard';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
export function AdminRoutes() {
    return (<Routes>
      <Route path="/login" element={<AdminLoginForm />}/>
      
      <Route path="/*" element={<AdminProtectedRoute>
            <AdminLayout>
              <Breadcrumbs />
              <Routes>
                <Route path="/" element={<AdminDashboard />}/>
                <Route path="/team" element={<TeamManagement />}/>
                <Route path="/ai-monitor" element={<AIMonitoringDashboard />}/>
              </Routes>
            </AdminLayout>
          </AdminProtectedRoute>}/>
    </Routes>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
