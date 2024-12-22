<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Bell, Shield } from 'lucide-react';
export function AdminHeader({ user, onLogout }) {
    return (_jsx("nav", { className: "bg-white border-b border-gray-200 fixed w-full z-30", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between h-16", children: [_jsx("div", { className: "flex items-center", children: _jsx("span", { className: "text-xl font-bold text-red-600", children: "Admin Portal" }) }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("button", { className: "text-gray-500 hover:text-gray-700", children: _jsx(Bell, { className: "h-6 w-6" }) }), _jsxs("div", { className: "relative group", children: [_jsxs("button", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-red-500 flex items-center justify-center", children: _jsx(Shield, { className: "h-5 w-5 text-white" }) }), _jsx("span", { className: "text-gray-700", children: user?.name })] }), _jsx("div", { className: "absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300", children: _jsx("button", { onClick: onLogout, className: "w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100", children: "Sign Out" }) })] })] })] }) }) }));
=======
import React from 'react';
import { Bell, Shield } from 'lucide-react';
export function AdminHeader({ user, onLogout }) {
    return (<nav className="bg-white border-b border-gray-200 fixed w-full z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-red-600">Admin Portal</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Bell className="h-6 w-6"/>
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white"/>
                </div>
                <span className="text-gray-700">{user?.name}</span>
              </button>
              <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <button onClick={onLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
