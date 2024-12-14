import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  FileText, 
  Calendar, 
  MessageSquare,
  Settings,
  LogOut,
  Bell,
  User,
  ArrowLeft,
  TrendingUp,
  CheckSquare,
  BarChart,
  DollarSign
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/Button';
import type { MenuItem } from '../../types';

const menuItems: MenuItem[] = [
  { title: 'Dashboard', href: '/professional', icon: Home },
  { title: 'Clients', href: '/professional/clients', icon: Users },
  { title: 'Analytics', href: '/professional/analytics', icon: TrendingUp },
  { title: 'Tasks', href: '/professional/tasks', icon: CheckSquare },
  { title: 'Reports', href: '/professional/reports', icon: BarChart },
  { title: 'Billing', href: '/professional/billing', icon: DollarSign },
  { title: 'Documents', href: '/professional/documents', icon: FileText },
  { title: 'Calendar', href: '/professional/calendar', icon: Calendar },
  { title: 'Messages', href: '/professional/messages', icon: MessageSquare },
  { title: 'Settings', href: '/professional/settings', icon: Settings },
];

export function ProfessionalLayout({ children }: { children: React.ReactNode }) {
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
      <nav className="bg-white border-b border-gray-200 fixed w-full z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                icon={ArrowLeft}
                className="mr-4"
              >
                Back to Home
              </Button>
              <span className="text-xl font-bold text-blue-600">Professional Portal</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Bell className="h-6 w-6" />
              </button>
              <div className="relative group">
                <button className="flex items-center space-x-3 focus:outline-none">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700">{user?.name}</span>
                </button>
                <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/professional/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link to="/professional/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <hr className="my-2" />
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        <aside className="w-64 bg-white h-[calc(100vh-4rem)] border-r border-gray-200 fixed">
          <nav className="mt-5 px-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.title}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md mb-1
                    ${isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                  <item.icon className={`mr-4 h-6 w-6 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 ml-64 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}