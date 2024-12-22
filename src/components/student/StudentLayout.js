import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, GraduationCap, TrendingUp, Settings, Bell, User, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/Button';
const menuItems = [
    { title: 'Dashboard', href: '/student', icon: Home },
    { title: 'Learning Resources', href: '/student/resources', icon: BookOpen },
    { title: 'Practice Exercises', href: '/student/exercises', icon: GraduationCap },
    { title: 'Progress Tracking', href: '/student/progress', icon: TrendingUp },
    { title: 'Settings', href: '/student/settings', icon: Settings },
];
export function StudentLayout({ children }) {
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
    return (_jsxs("div", { className: "min-h-screen bg-gray-100", children: [_jsx("nav", { className: "bg-white border-b border-gray-200 fixed w-full z-30", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between h-16", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Button, { variant: "ghost", onClick: () => navigate('/'), icon: ArrowLeft, className: "mr-4", children: "Back to Home" }), _jsx("span", { className: "text-xl font-bold text-blue-600", children: "Student Portal" })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("button", { className: "text-gray-500 hover:text-gray-700", children: _jsx(Bell, { className: "h-6 w-6" }) }), _jsxs("div", { className: "relative group", children: [_jsxs("button", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center", children: _jsx(User, { className: "h-5 w-5 text-white" }) }), _jsx("span", { className: "text-gray-700", children: user?.name })] }), _jsxs("div", { className: "absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300", children: [_jsx(Link, { to: "/student/profile", className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", children: "Profile" }), _jsx(Link, { to: "/student/settings", className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", children: "Settings" }), _jsx("hr", { className: "my-2" }), _jsx("button", { onClick: handleLogout, className: "w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100", children: "Sign Out" })] })] })] })] }) }) }), _jsxs("div", { className: "flex pt-16", children: [_jsx("aside", { className: "w-64 bg-white h-[calc(100vh-4rem)] border-r border-gray-200 fixed", children: _jsx("nav", { className: "mt-5 px-2", children: menuItems.map((item) => {
                                const isActive = location.pathname === item.href;
                                return (_jsxs(Link, { to: item.href, className: `group flex items-center px-2 py-2 text-base font-medium rounded-md mb-1
                    ${isActive
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`, children: [_jsx(item.icon, { className: `mr-4 h-6 w-6 ${isActive ? 'text-blue-600' : 'text-gray-400'}` }), item.title] }, item.title));
                            }) }) }), _jsx("main", { className: "flex-1 ml-64 p-8", children: children })] })] }));
}
