<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from 'react';
=======
import React, { createContext, useContext, useState, useEffect } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { useNavigate } from 'react-router-dom';
import { mockLogin, mockLogout, mockCheckAuth } from '../lib/mockAuth';
import { useNotificationStore } from '../lib/store';
const AuthContext = createContext(undefined);
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addNotification } = useNotificationStore();
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth();
    }, []);
    const checkAuth = async () => {
        try {
            const user = await mockCheckAuth();
            setUser(user);
        }
        catch (error) {
            setUser(null);
        }
        finally {
            setLoading(false);
        }
    };
    const login = async (email, password) => {
        try {
            const user = await mockLogin(email, password);
            setUser(user);
            addNotification(`Welcome back, ${user.name}!`, 'success');
            // Redirect based on user role
            switch (user.role) {
                case 'admin':
                    navigate('/admin');
                    break;
                case 'professional':
                    navigate('/professional');
                    break;
                case 'investor':
                    navigate('/investor');
                    break;
                default:
                    navigate('/dashboard');
            }
        }
        catch (error) {
            addNotification('Invalid email or password', 'error');
            throw error;
        }
    };
    const logout = async () => {
        try {
            await mockLogout();
            setUser(null);
            addNotification('Successfully logged out', 'success');
            navigate('/');
        }
        catch (error) {
            addNotification('Error logging out', 'error');
            throw error;
        }
    };
    const value = {
        user,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
    };
<<<<<<< HEAD
    return (_jsx(AuthContext.Provider, { value: value, children: children }));
=======
    return (<AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
