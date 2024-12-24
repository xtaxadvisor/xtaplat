<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../auth/ProtectedRoute';
import { LoadingSpinner } from '../ui/LoadingSpinner';
// Lazy load portal components
const AdminPortal = React.lazy(() => import('../../pages/admin/AdminPortal'));
const ClientPortal = React.lazy(() => import('../../pages/client/ClientPortal'));
const ProfessionalPortal = React.lazy(() => import('../../pages/professional/ProfessionalPortal'));
const InvestorPortal = React.lazy(() => import('../../pages/investor/InvestorPortal'));
const StudentPortal = React.lazy(() => import('../../pages/student/StudentPortal'));
const MessagingPortal = React.lazy(() => import('../../pages/messaging/MessagingPortal'));
export function PortalRouter() {
<<<<<<< HEAD
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/admin/*", element: _jsx(React.Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['admin'], children: _jsx(AdminPortal, {}) }) }) }), _jsx(Route, { path: "/client/*", element: _jsx(React.Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['client'], children: _jsx(ClientPortal, {}) }) }) }), _jsx(Route, { path: "/professional/*", element: _jsx(React.Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['professional'], children: _jsx(ProfessionalPortal, {}) }) }) }), _jsx(Route, { path: "/investor/*", element: _jsx(React.Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['investor'], children: _jsx(InvestorPortal, {}) }) }) }), _jsx(Route, { path: "/student/*", element: _jsx(React.Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['student'], children: _jsx(StudentPortal, {}) }) }) }), _jsx(Route, { path: "/messages/*", element: _jsx(React.Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { children: _jsx(MessagingPortal, {}) }) }) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] }));
=======
    return (<Routes>
      <Route path="/admin/*" element={<React.Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute requiredRole={['admin']}>
              <AdminPortal />
            </ProtectedRoute>
          </React.Suspense>}/>
      
      <Route path="/client/*" element={<React.Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute requiredRole={['client']}>
              <ClientPortal />
            </ProtectedRoute>
          </React.Suspense>}/>
      
      <Route path="/professional/*" element={<React.Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute requiredRole={['professional']}>
              <ProfessionalPortal />
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
      
      <Route path="/messages/*" element={<React.Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute>
              <MessagingPortal />
            </ProtectedRoute>
          </React.Suspense>}/>

      <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
