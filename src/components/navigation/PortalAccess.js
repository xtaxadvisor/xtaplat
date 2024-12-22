import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Shield, Users, Database, TrendingUp, MessageSquare, BookOpen } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import { useNotificationStore } from '../../lib/store';
export function PortalButton({ title, description, icon: Icon, path, requiredRole }) {
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
    return (_jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("div", { className: "p-2 bg-blue-50 rounded-lg", children: _jsx(Icon, { className: "h-6 w-6 text-blue-600" }) }), _jsx("h3", { className: "ml-3 text-xl font-semibold text-gray-900", children: title })] }), _jsx("p", { className: "text-gray-600 mb-6", children: description }), _jsx(Button, { variant: "primary", onClick: handleAccess, className: "w-full", children: "Access Portal" })] }));
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
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: portals.map((portal) => (_jsx(PortalButton, { ...portal }, portal.title))) }));
}
