import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { Button } from '../ui/Button';
export function NotFoundPage() {
    const navigate = useNavigate();
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: _jsxs("div", { className: "max-w-md w-full text-center p-8", children: [_jsx(AlertTriangle, { className: "mx-auto h-16 w-16 text-red-500" }), _jsx("h1", { className: "mt-4 text-3xl font-bold text-gray-900", children: "Page Not Found" }), _jsx("p", { className: "mt-2 text-gray-600", children: "The page you're looking for doesn't exist or has been moved." }), _jsx("div", { className: "mt-6", children: _jsx(Button, { variant: "primary", onClick: () => navigate('/'), children: "Return to Home" }) })] }) }));
}
