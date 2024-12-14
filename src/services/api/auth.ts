import { api } from '../api';
import type { User } from '../../types';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
  role: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export const authService = {
  login: (credentials: LoginCredentials) => 
    api.post<AuthResponse>('/auth/login', credentials),

  register: (data: RegisterData) => 
    api.post<AuthResponse>('/auth/register', data),

  logout: () => 
    api.post<void>('/auth/logout'),

  getCurrentUser: () => 
    api.get<User>('/auth/me'),

  refreshToken: () => 
    api.post<{ token: string }>('/auth/refresh'),

  updatePassword: (oldPassword: string, newPassword: string) => 
    api.put<void>('/auth/password', { oldPassword, newPassword }),
};