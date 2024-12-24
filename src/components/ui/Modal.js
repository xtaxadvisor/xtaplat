<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { X } from 'lucide-react';
import { Button } from './Button';
export function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen)
        return null;
<<<<<<< HEAD
    return (_jsx("div", { className: "fixed inset-0 z-50 overflow-y-auto", children: _jsxs("div", { className: "flex min-h-screen items-center justify-center p-4", children: [_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-25 transition-opacity", onClick: onClose }), _jsxs("div", { className: "relative bg-white rounded-lg shadow-xl max-w-md w-full", children: [_jsxs("div", { className: "flex items-center justify-between p-4 border-b", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: title }), _jsx(Button, { variant: "ghost", size: "sm", onClick: onClose, icon: X, className: "text-gray-400 hover:text-gray-500" })] }), _jsx("div", { className: "p-6", children: children })] })] }) }));
=======
    return (<div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" onClick={onClose}/>
        
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <Button variant="ghost" size="sm" onClick={onClose} icon={X} className="text-gray-400 hover:text-gray-500"/>
          </div>
          
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
