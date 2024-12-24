<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getAvailablePortals } from './portalConfig';
export function PortalNavigation() {
    const location = useLocation();
    const { user } = useAuth();
    const availablePortals = getAvailablePortals(user?.role);
<<<<<<< HEAD
    return (_jsx("nav", { className: "space-y-1", children: availablePortals.map((portal) => {
            const isActive = location.pathname.startsWith(portal.path);
            const Icon = portal.icon;
            return (_jsxs(Link, { to: portal.path, className: `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`, children: [_jsx(Icon, { className: `mr-3 h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'}` }), _jsx("span", { children: portal.title }), portal.notifications && (_jsx("span", { className: "ml-auto bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full text-xs", children: "New" }))] }, portal.id));
        }) }));
=======
    return (<nav className="space-y-1">
      {availablePortals.map((portal) => {
            const isActive = location.pathname.startsWith(portal.path);
            const Icon = portal.icon;
            return (<Link key={portal.id} to={portal.path} className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
            <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'}`}/>
            <span>{portal.title}</span>
            {portal.notifications && (<span className="ml-auto bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full text-xs">
                New
              </span>)}
          </Link>);
        })}
    </nav>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
