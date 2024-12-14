import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Video, 
  Users, 
  BookOpen,
  Settings, 
  LogOut,
  ArrowLeft,
  MessageSquare,
  TrendingUp
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/Button';

const menuItems = [
  { title: 'Dashboard', href: '/investor', icon: Home },
  { title: 'Video Library', href: '/investor/videos', icon: Video },
  { title: 'Investment Forum', href: '/investor/forum', icon: MessageSquare },
  { title: 'Market Analysis', href: '/investor/analysis', icon: TrendingUp },
  { title: 'Resources', href: '/investor/resources', icon: BookOpen },
  { title: 'Settings', href: '/investor/settings', icon: Settings },
];

export function InvestorLayout({ children }: { children: React.ReactNode }) {
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
      <nav className="bg-white border-b border-gray-200">
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
              <span className="text-xl font-bold text-blue-600">Investor Portal</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user?.name}</span>
              <Button 
                onClick={handleLogout}
                variant="ghost"
                className="text-gray-600 hover:text-gray-900"
                icon={LogOut}
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 bg-white h-screen border-r border-gray-200">
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

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}