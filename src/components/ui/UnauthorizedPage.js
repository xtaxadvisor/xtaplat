<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { Button } from './Button';
export function UnauthorizedPage() {
    const navigate = useNavigate();
<<<<<<< HEAD
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: _jsxs("div", { className: "max-w-md w-full text-center p-8", children: [_jsx(AlertTriangle, { className: "mx-auto h-16 w-16 text-red-500" }), _jsx("h1", { className: "mt-4 text-3xl font-bold text-gray-900", children: "Unauthorized Access" }), _jsx("p", { className: "mt-2 text-gray-600", children: "You don't have permission to access this page." }), _jsx("div", { className: "mt-6", children: _jsx(Button, { variant: "primary", onClick: () => navigate('/'), children: "Return to Home" }) })] }) }));
=======
    return (<div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center p-8">
        <AlertTriangle className="mx-auto h-16 w-16 text-red-500"/>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Unauthorized Access</h1>
        <p className="mt-2 text-gray-600">
          You don't have permission to access this page.
        </p>
        <div className="mt-6">
          <Button variant="primary" onClick={() => navigate('/')}>
            Return to Home
          </Button>
        </div>
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
