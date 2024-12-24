<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Routes, Route } from 'react-router-dom';
import { AdminDashboard } from '../components/admin/AdminDashboard';
import { AdminLayout } from '../components/admin/AdminLayout';
export default function AdminPortal() {
<<<<<<< HEAD
    return (_jsx(AdminLayout, { children: _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(AdminDashboard, {}) }) }) }));
=======
    return (<AdminLayout>
      <Routes>
        <Route path="/" element={<AdminDashboard />}/>
        {/* Add more admin routes as needed */}
      </Routes>
    </AdminLayout>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
