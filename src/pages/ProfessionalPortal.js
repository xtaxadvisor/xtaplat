import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { ProfessionalDashboard } from '../components/professional/ProfessionalDashboard';
import { ClientList } from '../components/professional/ClientList';
import { Analytics } from '../components/professional/Analytics';
import { TaskManager } from '../components/professional/TaskManager';
import { Reports } from '../components/professional/Reports';
import { Billing } from '../components/professional/Billing';
import { Messages } from '../components/dashboard/Messages';
import { Documents } from '../components/dashboard/Documents';
import { Calendar } from '../components/dashboard/Calendar';
import { Settings } from '../components/dashboard/Settings';
import { ProfessionalLayout } from '../components/professional/ProfessionalLayout';
export default function ProfessionalPortal() {
    return (_jsx(ProfessionalLayout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(ProfessionalDashboard, {}) }), _jsx(Route, { path: "/clients", element: _jsx(ClientList, {}) }), _jsx(Route, { path: "/analytics", element: _jsx(Analytics, {}) }), _jsx(Route, { path: "/tasks", element: _jsx(TaskManager, {}) }), _jsx(Route, { path: "/reports", element: _jsx(Reports, {}) }), _jsx(Route, { path: "/billing", element: _jsx(Billing, {}) }), _jsx(Route, { path: "/messages", element: _jsx(Messages, {}) }), _jsx(Route, { path: "/documents", element: _jsx(Documents, {}) }), _jsx(Route, { path: "/calendar", element: _jsx(Calendar, {}) }), _jsx(Route, { path: "/settings", element: _jsx(Settings, {}) })] }) }));
}
