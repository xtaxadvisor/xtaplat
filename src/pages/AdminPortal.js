import { jsx as _jsx } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { AdminDashboard } from '../components/admin/AdminDashboard';
import { AdminLayout } from '../components/admin/AdminLayout';
export default function AdminPortal() {
    return (_jsx(AdminLayout, { children: _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(AdminDashboard, {}) }) }) }));
}
