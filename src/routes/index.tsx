import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { UnauthorizedPage } from '../components/shared/UnauthorizedPage';
import { NotFoundPage } from '../components/shared/NotFoundPage';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { PortalRoutes } from './PortalRoutes';

// Lazy loaded components
const Home = React.lazy(() => import('../pages/Home'));
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/RegisterPage'));
const ConsultationPage = React.lazy(() => import('../pages/consultation/ConsultationPage'));
const ServiceCatalog = React.lazy(() => import('../pages/services/ServiceCatalog'));
const SameDayServices = React.lazy(() => import('../pages/services/SameDayServices'));
const VideoLibrary = React.lazy(() => import('../pages/videos/VideoLibrary'));

export function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServiceCatalog />} />
        <Route path="/same-day-services" element={<SameDayServices />} />
        <Route path="/browse-videos" element={<VideoLibrary />} />
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} 
        />
        <Route 
          path="/register" 
          element={isAuthenticated ? <Navigate to="/" /> : <RegisterPage />} 
        />

        {/* Protected Routes */}
        <Route
          path="/consultation/*"
          element={
            <ProtectedRoute>
              <ConsultationPage />
            </ProtectedRoute>
          }
        />

        {/* Portal Routes */}
        <Route path="/*" element={<PortalRoutes />} />

        {/* Error Pages */}
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Suspense>
  );
}