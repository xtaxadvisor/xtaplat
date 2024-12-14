import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Settings, 
  Shield, 
  Database,
  Activity,
  LogOut,
  Bell,
  UserPlus
} from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { Button } from '../../ui/Button';
import { AdminHeader } from './AdminHeader';
import { AdminSidebar } from './AdminSidebar';
import type { MenuItem } from '../../../types';

const menuItems: MenuItem[] = [
  { title: 'Dashboard', href: '/admin', icon: Home },
  { title: 'Team Management', href: '/admin/team', icon: Users },
  { title: 'User Management', href: '/admin/users', icon: UserPlus },
  { title: 'System Logs', href: '/admin/logs', icon: Activity },
  { title: 'Database', href: '/admin/database', icon: Database },
  { title: 'Settings', href: '/admin/settings', icon: Settings }
];

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader 
        user={user} 
        onLogout={handleLogout}
      />

      <div className="flex pt-16">
        <AdminSidebar 
          menuItems={menuItems}
          currentPath={location.pathname}
        />

        <main className="flex-1 ml-64 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}