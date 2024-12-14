import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from '../types';
import { mockLogin, mockLogout, mockCheckAuth } from '../lib/mockAuth';
import { useNotificationStore } from '../lib/store';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
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
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
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
    } catch (error) {
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
    } catch (error) {
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

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}