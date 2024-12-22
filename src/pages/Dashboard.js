import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { DashboardHome } from '../components/dashboard/DashboardHome';
import { Messages } from '../components/dashboard/Messages';
import { Documents } from '../components/dashboard/Documents';
import { Calendar } from '../components/dashboard/Calendar';
import { Settings } from '../components/dashboard/Settings';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { ConsultationList } from '../components/consultation/ConsultationList';
export default function Dashboard() {
    return (_jsx(DashboardLayout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(DashboardHome, {}) }), _jsx(Route, { path: "/consultations", element: _jsx(ConsultationList, {}) }), _jsx(Route, { path: "/messages", element: _jsx(Messages, {}) }), _jsx(Route, { path: "/documents", element: _jsx(Documents, {}) }), _jsx(Route, { path: "/calendar", element: _jsx(Calendar, {}) }), _jsx(Route, { path: "/settings", element: _jsx(Settings, {}) })] }) }));
}
