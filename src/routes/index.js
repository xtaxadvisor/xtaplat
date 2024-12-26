import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
const VideoDetail = React.lazy(() => import('../pages/videos/VideoDetail'));
export function AppRoutes() {
    const { isAuthenticated } = useAuth();
    return (_jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/services", element: _jsx(ServiceCatalog, {}) }), _jsx(Route, { path: "/same-day-services", element: _jsx(SameDayServices, {}) }), _jsx(Route, { path: "/browse-videos", element: _jsx(VideoLibrary, {}) }), _jsx(Route, { path: "/browse-videos/:videoId", element: _jsx(VideoDetail, {}) }), _jsx(Route, { path: "/login", element: isAuthenticated ? _jsx(Navigate, { to: "/" }) : _jsx(LoginPage, {}) }), _jsx(Route, { path: "/register", element: isAuthenticated ? _jsx(Navigate, { to: "/" }) : _jsx(RegisterPage, {}) }), _jsx(Route, { path: "/consultation/*", element: _jsx(ProtectedRoute, { children: _jsx(ConsultationPage, {}) }) }), _jsx(Route, { path: "/*", element: _jsx(PortalRoutes, {}) }), _jsx(Route, { path: "/unauthorized", element: _jsx(UnauthorizedPage, {}) }), _jsx(Route, { path: "/not-found", element: _jsx(NotFoundPage, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/not-found", replace: true }) })] }) }));
}
