import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

// Lazy load portal components
const AdminPortal = React.lazy(() => import('../pages/admin/AdminPortal'));
const InvestorPortal = React.lazy(() => import('../pages/investor/InvestorPortal'));
const StudentPortal = React.lazy(() => import('../pages/student/StudentPortal'));

export function PortalRoutes() {
  return (
    <Routes>
      <Route
        path="/admin/*"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute requiredRole={['admin']}>
              <AdminPortal />
            </ProtectedRoute>
          </React.Suspense>
        }
      />
      
      <Route
        path="/investor/*"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute requiredRole={['investor']}>
              <InvestorPortal />
            </ProtectedRoute>
          </React.Suspense>
        }
      />

      <Route
        path="/student/*"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute requiredRole={['student']}>
              <StudentPortal />
            </ProtectedRoute>
          </React.Suspense>
        }
      />

      {/* Fallback for invalid portal routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}