<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
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
<<<<<<< HEAD
    return (_jsx(ProfessionalLayout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(ProfessionalDashboard, {}) }), _jsx(Route, { path: "/clients", element: _jsx(ClientList, {}) }), _jsx(Route, { path: "/analytics", element: _jsx(Analytics, {}) }), _jsx(Route, { path: "/tasks", element: _jsx(TaskManager, {}) }), _jsx(Route, { path: "/reports", element: _jsx(Reports, {}) }), _jsx(Route, { path: "/billing", element: _jsx(Billing, {}) }), _jsx(Route, { path: "/messages", element: _jsx(Messages, {}) }), _jsx(Route, { path: "/documents", element: _jsx(Documents, {}) }), _jsx(Route, { path: "/calendar", element: _jsx(Calendar, {}) }), _jsx(Route, { path: "/settings", element: _jsx(Settings, {}) })] }) }));
=======
    return (<ProfessionalLayout>
      <Routes>
        <Route path="/" element={<ProfessionalDashboard />}/>
        <Route path="/clients" element={<ClientList />}/>
        <Route path="/analytics" element={<Analytics />}/>
        <Route path="/tasks" element={<TaskManager />}/>
        <Route path="/reports" element={<Reports />}/>
        <Route path="/billing" element={<Billing />}/>
        <Route path="/messages" element={<Messages />}/>
        <Route path="/documents" element={<Documents />}/>
        <Route path="/calendar" element={<Calendar />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </ProfessionalLayout>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
