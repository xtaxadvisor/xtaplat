<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, User, Key } from 'lucide-react';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { useNotificationStore } from '../../../lib/store';
import { adminAuthService } from '../../../services/auth/adminAuth';
import { isStrongPassword } from '../../../utils/crypto';
export function AdminLoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        totpCode: ''
    });
    const [loading, setLoading] = useState(false);
    const [showTOTP, setShowTOTP] = useState(false);
    const navigate = useNavigate();
    const { addNotification } = useNotificationStore();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log('Admin login attempt:', { username: formData.username });
        try {
            if (!isStrongPassword(formData.password)) {
                addNotification('Password does not meet security requirements', 'error');
                return;
            }
            const success = await adminAuthService.login(formData);
            console.log('Login result:', { success });
            if (success) {
                if (!showTOTP) {
                    setShowTOTP(true);
                    setLoading(false);
                    return;
                }
                addNotification('Admin access granted', 'success');
                navigate('/admin');
            }
            else {
                addNotification('Invalid credentials', 'error');
            }
        }
        catch (error) {
            console.error('Login error:', error);
            addNotification('Authentication failed', 'error');
        }
        finally {
            setLoading(false);
        }
    };
<<<<<<< HEAD
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100", children: _jsxs("div", { className: "max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg", children: [_jsxs("div", { className: "text-center", children: [_jsx(Shield, { className: "mx-auto h-12 w-12 text-blue-600" }), _jsx("h2", { className: "mt-6 text-3xl font-bold text-gray-900", children: "Admin Access Required" }), _jsx("p", { className: "mt-2 text-sm text-gray-600", children: "Please enter your admin credentials to continue" })] }), _jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit, children: [!showTOTP ? (_jsxs(_Fragment, { children: [_jsx(Input, { type: "text", label: "Username", icon: User, value: formData.username, onChange: (e) => setFormData({ ...formData, username: e.target.value }), required: true, autoComplete: "username", placeholder: "Enter your username" }), _jsx(Input, { type: "password", label: "Password", icon: Lock, value: formData.password, onChange: (e) => setFormData({ ...formData, password: e.target.value }), required: true, autoComplete: "current-password", placeholder: "Enter your password" })] })) : (_jsx(Input, { type: "text", label: "Two-Factor Code", icon: Key, value: formData.totpCode, onChange: (e) => setFormData({ ...formData, totpCode: e.target.value }), required: true, placeholder: "Enter your 2FA code", pattern: "[0-9]{6}", maxLength: 6 })), _jsx(Button, { type: "submit", variant: "primary", className: "w-full", disabled: loading, children: loading ? 'Verifying...' : showTOTP ? 'Verify 2FA Code' : 'Continue' })] })] }) }));
=======
    return (<div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-blue-600"/>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Admin Access Required
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please enter your admin credentials to continue
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {!showTOTP ? (<>
              <Input type="text" label="Username" icon={User} value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} required autoComplete="username" placeholder="Enter your username"/>
              <Input type="password" label="Password" icon={Lock} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required autoComplete="current-password" placeholder="Enter your password"/>
            </>) : (<Input type="text" label="Two-Factor Code" icon={Key} value={formData.totpCode} onChange={(e) => setFormData({ ...formData, totpCode: e.target.value })} required placeholder="Enter your 2FA code" pattern="[0-9]{6}" maxLength={6}/>)}

          <Button type="submit" variant="primary" className="w-full" disabled={loading}>
            {loading ? 'Verifying...' : showTOTP ? 'Verify 2FA Code' : 'Continue'}
          </Button>
        </form>
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
