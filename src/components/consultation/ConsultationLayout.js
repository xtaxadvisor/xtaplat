import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Calendar, Clock, Video, MessageSquare, Settings, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
export function ConsultationLayout({ children }) {
    const navigate = useNavigate();
    const location = useLocation();
    const menuItems = [
        { title: 'My Consultations', href: '/consultation', icon: Calendar },
        { title: 'Schedule', href: '/consultation/book', icon: Clock },
        { title: 'Video Sessions', href: '/consultation/sessions', icon: Video },
        { title: 'Messages', href: '/consultation/messages', icon: MessageSquare },
        { title: 'Settings', href: '/consultation/settings', icon: Settings },
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gray-100", children: [_jsx("nav", { className: "bg-white border-b border-gray-200 fixed w-full z-30", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "flex justify-between h-16", children: _jsxs("div", { className: "flex items-center", children: [_jsx(Button, { variant: "ghost", onClick: () => navigate('/'), icon: ArrowLeft, className: "mr-4", children: "Back to Home" }), _jsx("span", { className: "text-xl font-bold text-blue-600", children: "Consultation Portal" })] }) }) }) }), _jsxs("div", { className: "flex pt-16", children: [_jsx("aside", { className: "w-64 bg-white h-[calc(100vh-4rem)] border-r border-gray-200 fixed", children: _jsx("nav", { className: "mt-5 px-2", children: menuItems.map((item) => {
                                const isActive = location.pathname === item.href;
                                return (_jsxs(Link, { to: item.href, className: `group flex items-center px-2 py-2 text-base font-medium rounded-md mb-1
                    ${isActive
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`, children: [_jsx(item.icon, { className: `mr-4 h-6 w-6 ${isActive ? 'text-blue-600' : 'text-gray-400'}` }), item.title] }, item.title));
                            }) }) }), _jsx("main", { className: "flex-1 ml-64 p-8", children: children })] })] }));
}
