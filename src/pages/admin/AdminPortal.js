import React from 'react';
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
    return (<AdminProtectedRoute>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<AdminDashboard />}/>
          <Route path="/team" element={<TeamManagement />}/>
          <Route path="/users" element={<UserManagement />}/>
          <Route path="/logs" element={<SystemLogs />}/>
          <Route path="/settings" element={<AdminSettings />}/>
          <Route path="/404" element={<NotFoundPage />}/>
          <Route path="*" element={<Navigate to="/admin/404" replace/>}/>
        </Routes>
      </AdminLayout>
    </AdminProtectedRoute>);
}
