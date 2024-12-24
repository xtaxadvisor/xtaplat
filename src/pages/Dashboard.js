<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Routes, Route } from 'react-router-dom';
import { DashboardHome } from '../components/dashboard/DashboardHome';
import { Messages } from '../components/dashboard/Messages';
import { Documents } from '../components/dashboard/Documents';
import { Calendar } from '../components/dashboard/Calendar';
import { Settings } from '../components/dashboard/Settings';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { ConsultationList } from '../components/consultation/ConsultationList';
export default function Dashboard() {
<<<<<<< HEAD
    return (_jsx(DashboardLayout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(DashboardHome, {}) }), _jsx(Route, { path: "/consultations", element: _jsx(ConsultationList, {}) }), _jsx(Route, { path: "/messages", element: _jsx(Messages, {}) }), _jsx(Route, { path: "/documents", element: _jsx(Documents, {}) }), _jsx(Route, { path: "/calendar", element: _jsx(Calendar, {}) }), _jsx(Route, { path: "/settings", element: _jsx(Settings, {}) })] }) }));
=======
    return (<DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardHome />}/>
        <Route path="/consultations" element={<ConsultationList />}/>
        <Route path="/messages" element={<Messages />}/>
        <Route path="/documents" element={<Documents />}/>
        <Route path="/calendar" element={<Calendar />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </DashboardLayout>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
