export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends AuthCredentials {
  name: string;
  role: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isAdmin?: boolean;
}

export type UserRole = 'client' | 'student' | 'investor' | 'professional' | 'admin';