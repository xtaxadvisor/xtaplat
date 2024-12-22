import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, Database, TrendingUp, MessageSquare, BookOpen, LucideProps } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import { useNotificationStore } from '../../lib/store';

interface PortalButtonProps {
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps>;
  path: string;
  requiredRole?: string[];
}

export function PortalButton({ title, description, icon: Icon, path, requiredRole }: PortalButtonProps) {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const { addNotification } = useNotificationStore();

  const handleAccess = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: path } });
      return;
    }

    if (requiredRole && (!user?.role || !requiredRole.includes(user.role))) {
      addNotification('You do not have permission to access this portal', 'error');
      return;
    }

    navigate(path);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="ml-3 text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button
        variant="primary"
        onClick={handleAccess}
        className="w-full"
      >
        Access Portal
      </Button>
    </div>
  );
}

export function PortalAccess() {
  const portals = [
    {
      title: 'Client Portal',
      description: 'Access your documents and manage your financial information securely.',
      icon: Database,
      path: '/client',
      requiredRole: ['client']
    },
    {
      title: 'Professional Portal',
      description: 'Dedicated workspace for financial professionals.',
      icon: Users,
      path: '/professional',
      requiredRole: ['professional']
    },
    {
      title: 'Investor Portal',
      description: 'Access investment tools and market insights.',
      icon: TrendingUp,
      path: '/investor',
      requiredRole: ['investor']
    },
    {
      title: 'Student Portal',
      description: 'Access educational resources and financial learning materials.',
      icon: BookOpen,
      path: '/student',
      requiredRole: ['student']
    },
    {
      title: 'Admin Portal',
      description: 'Comprehensive system administration and management.',
      icon: Shield,
      path: '/admin',
      requiredRole: ['admin']
    },
    {
      title: 'Secure Messaging',
      description: 'End-to-end encrypted communication platform.',
      icon: MessageSquare,
      path: '/messages'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portals.map((portal) => (
        <PortalButton key={portal.title} {...portal} />
      ))}
    </div>
  );
}