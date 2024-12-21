import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminProtectedRoute } from '../components/admin/auth/AdminProtectedRoute';
import { AdminDashboard } from '../components/admin/AdminDashboard';
import { AdminLayout } from '../components/admin/AdminLayout';
import { AdminLoginForm } from '../components/admin/auth/AdminLoginForm';
import { TeamManagement } from '../components/admin/team/TeamManagement';
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
}
