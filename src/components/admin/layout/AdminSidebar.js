import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
export function AdminSidebar({ menuItems, currentPath }) {
    return (_jsx("aside", { className: "w-64 bg-white h-[calc(100vh-4rem)] border-r border-gray-200 fixed", children: _jsx("nav", { className: "mt-5 px-2", children: menuItems.map((item) => {
                const isActive = currentPath === item.href;
                return (_jsxs(Link, { to: item.href, className: `group flex items-center px-2 py-2 text-base font-medium rounded-md mb-1
                ${isActive
                        ? 'bg-red-50 text-red-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`, children: [_jsx(item.icon, { className: `mr-4 h-6 w-6 ${isActive ? 'text-red-600' : 'text-gray-400'}` }), item.title] }, item.title));
            }) }) }));
}
