<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
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
<<<<<<< HEAD
export function AppRoutes() {
    const { isAuthenticated } = useAuth();
    return (_jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/services", element: _jsx(ServiceCatalog, {}) }), _jsx(Route, { path: "/same-day-services", element: _jsx(SameDayServices, {}) }), _jsx(Route, { path: "/browse-videos", element: _jsx(VideoLibrary, {}) }), _jsx(Route, { path: "/login", element: isAuthenticated ? _jsx(Navigate, { to: "/" }) : _jsx(LoginPage, {}) }), _jsx(Route, { path: "/register", element: isAuthenticated ? _jsx(Navigate, { to: "/" }) : _jsx(RegisterPage, {}) }), _jsx(Route, { path: "/consultation/*", element: _jsx(ProtectedRoute, { children: _jsx(ConsultationPage, {}) }) }), _jsx(Route, { path: "/*", element: _jsx(PortalRoutes, {}) }), _jsx(Route, { path: "/unauthorized", element: _jsx(UnauthorizedPage, {}) }), _jsx(Route, { path: "/not-found", element: _jsx(NotFoundPage, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/not-found", replace: true }) })] }) }));
=======
const VideoDetail = React.lazy(() => import('../pages/videos/VideoDetail'));
export function AppRoutes() {
    const { isAuthenticated } = useAuth();
    return (<Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<ServiceCatalog />}/>
        <Route path="/same-day-services" element={<SameDayServices />}/>
        <Route path="/browse-videos" element={<VideoLibrary />}/>
        <Route path="/browse-videos/:videoId" element={<VideoDetail />}/>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/"/> : <LoginPage />}/>
        <Route path="/register" element={isAuthenticated ? <Navigate to="/"/> : <RegisterPage />}/>

        {/* Protected Routes */}
        <Route path="/consultation/*" element={<ProtectedRoute>
              <ConsultationPage />
            </ProtectedRoute>}/>

        {/* Portal Routes */}
        <Route path="/*" element={<PortalRoutes />}/>

        {/* Error Pages */}
        <Route path="/unauthorized" element={<UnauthorizedPage />}/>
        <Route path="/not-found" element={<NotFoundPage />}/>
        <Route path="*" element={<Navigate to="/not-found" replace/>}/>
      </Routes>
    </Suspense>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
