<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
=======
import React from 'react';
import { Routes, Route } from 'react-router-dom';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
// Lazy load portal components
const AdminPortal = React.lazy(() => import('../pages/admin/AdminPortal'));
const InvestorPortal = React.lazy(() => import('../pages/investor/InvestorPortal'));
const StudentPortal = React.lazy(() => import('../pages/student/StudentPortal'));
<<<<<<< HEAD
export function PortalRoutes() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/admin/*", element: _jsx(React.Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['admin'], children: _jsx(AdminPortal, {}) }) }) }), _jsx(Route, { path: "/investor/*", element: _jsx(React.Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['investor'], children: _jsx(InvestorPortal, {}) }) }) }), _jsx(Route, { path: "/student/*", element: _jsx(React.Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['student'], children: _jsx(StudentPortal, {}) }) }) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] }));
=======
const ProfessionalPortal = React.lazy(() => import('../pages/ProfessionalPortal'));
export function PortalRoutes() {
    return (<Routes>
      <Route path="/admin/*" element={<React.Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute requiredRole={['admin']}>
              <AdminPortal />
            </ProtectedRoute>
          </React.Suspense>}/>
      
      <Route path="/investor/*" element={<React.Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute requiredRole={['investor']}>
              <InvestorPortal />
            </ProtectedRoute>
          </React.Suspense>}/>

      <Route path="/student/*" element={<React.Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute requiredRole={['student']}>
              <StudentPortal />
            </ProtectedRoute>
          </React.Suspense>}/>
      <Route path="/professional/*" element={<React.Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute requiredRole={['professional']}>
              <ProfessionalPortal />
            </ProtectedRoute>
          </React.Suspense>}/>
    </Routes>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
