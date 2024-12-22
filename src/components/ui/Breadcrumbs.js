import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
export function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);
    return (_jsx("nav", { className: "mb-4", children: _jsxs("ol", { className: "flex items-center space-x-2", children: [_jsx("li", { children: _jsx(Link, { to: "/admin", className: "text-gray-500 hover:text-gray-700", children: _jsx(Home, { className: "h-4 w-4" }) }) }), pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return (_jsxs(React.Fragment, { children: [_jsx(ChevronRight, { className: "h-4 w-4 text-gray-400" }), _jsx("li", { children: isLast ? (_jsx("span", { className: "text-gray-700 font-medium", children: name.charAt(0).toUpperCase() + name.slice(1) })) : (_jsx(Link, { to: routeTo, className: "text-gray-500 hover:text-gray-700", children: name.charAt(0).toUpperCase() + name.slice(1) })) })] }, name));
                })] }) }));
}
