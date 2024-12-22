<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Users, Settings, Database, Activity, UserPlus } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { AdminHeader } from './AdminHeader';
import { AdminSidebar } from './AdminSidebar';
const menuItems = [
    { title: 'Dashboard', href: '/admin', icon: Home },
    { title: 'Team Management', href: '/admin/team', icon: Users },
    { title: 'User Management', href: '/admin/users', icon: UserPlus },
    { title: 'System Logs', href: '/admin/logs', icon: Activity },
    { title: 'Database', href: '/admin/database', icon: Database },
    { title: 'Settings', href: '/admin/settings', icon: Settings }
];
export function AdminLayout({ children }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        }
        catch (error) {
            console.error('Logout failed:', error);
        }
    };
<<<<<<< HEAD
    return (_jsxs("div", { className: "min-h-screen bg-gray-100", children: [_jsx(AdminHeader, { user: user, onLogout: handleLogout }), _jsxs("div", { className: "flex pt-16", children: [_jsx(AdminSidebar, { menuItems: menuItems, currentPath: location.pathname }), _jsx("main", { className: "flex-1 ml-64 p-8", children: children })] })] }));
=======
    return (<div className="min-h-screen bg-gray-100">
      <AdminHeader user={user} onLogout={handleLogout}/>

      <div className="flex pt-16">
        <AdminSidebar menuItems={menuItems} currentPath={location.pathname}/>

        <main className="flex-1 ml-64 p-8">
          {children}
        </main>
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
