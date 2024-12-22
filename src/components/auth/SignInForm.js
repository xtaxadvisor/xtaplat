<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useNotificationStore } from '../../lib/store';
export function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { addNotification } = useNotificationStore();
    const from = location.state?.from?.pathname || '/dashboard';
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(email, password);
            addNotification('Successfully logged in!', 'success');
        }
        catch (error) {
            addNotification('Invalid email or password', 'error');
        }
        finally {
            setLoading(false);
        }
    };
<<<<<<< HEAD
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-md w-full space-y-8", children: [_jsxs("div", { children: [_jsx(Button, { variant: "ghost", className: "mb-4", onClick: () => navigate('/'), icon: ArrowLeft, children: "Back to Home" }), _jsx("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900", children: "Sign in to your account" }), _jsxs("p", { className: "mt-2 text-center text-sm text-gray-600", children: ["Or", ' ', _jsx(Link, { to: "/register", className: "font-medium text-blue-600 hover:text-blue-500", children: "create a new account" })] })] }), _jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit, children: [_jsxs("div", { className: "rounded-md shadow-sm -space-y-px", children: [_jsx(Input, { id: "email", type: "email", label: "Email address", icon: Mail, value: email, onChange: (e) => setEmail(e.target.value), required: true, autoComplete: "email", placeholder: "Email address" }), _jsx(Input, { id: "password", type: "password", label: "Password", icon: Lock, value: password, onChange: (e) => setPassword(e.target.value), required: true, autoComplete: "current-password", placeholder: "Password" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("input", { id: "remember-me", name: "remember-me", type: "checkbox", className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }), _jsx("label", { htmlFor: "remember-me", className: "ml-2 block text-sm text-gray-900", children: "Remember me" })] }), _jsx("div", { className: "text-sm", children: _jsx(Link, { to: "/forgot-password", className: "font-medium text-blue-600 hover:text-blue-500", children: "Forgot your password?" }) })] }), _jsx(Button, { type: "submit", variant: "primary", className: "w-full", disabled: loading, children: loading ? 'Signing in...' : 'Sign in' }), _jsxs("div", { className: "mt-4 text-center", children: [_jsx("p", { className: "text-sm text-gray-600", children: "Test accounts:" }), _jsxs("div", { className: "mt-2 space-y-1 text-sm text-gray-500", children: [_jsx("p", { children: "Client: client@example.com / client123" }), _jsx("p", { children: "Professional: professional@example.com / professional123" }), _jsx("p", { children: "Investor: investor@example.com / investor123" })] })] })] })] }) }));
=======
    return (<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Button variant="ghost" className="mb-4" onClick={() => navigate('/')} icon={ArrowLeft}>
            Back to Home
          </Button>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              create a new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <Input id="email" type="email" label="Email address" icon={Mail} value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" placeholder="Email address"/>
            <Input id="password" type="password" label="Password" icon={Lock} value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" placeholder="Password"/>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button type="submit" variant="primary" className="w-full" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Test accounts:
            </p>
            <div className="mt-2 space-y-1 text-sm text-gray-500">
              <p>Client: client@example.com / client123</p>
              <p>Professional: professional@example.com / professional123</p>
              <p>Investor: investor@example.com / investor123</p>
            </div>
          </div>
        </form>
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
