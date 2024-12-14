import type { User, AuthCredentials, RegisterData } from './types';
import { storeUser, clearStoredUser } from './storage';
import { validateLoginCredentials, validateRegistrationData } from './validation';

const users: Array<User & { password: string }> = [
  {
    id: '1',
    name: 'John Client',
    email: 'client@example.com',
    password: 'client123',
    role: 'client'
  },
  {
    id: '2',
    name: 'Sarah Student',
    email: 'student@example.com',
    password: 'student123',
    role: 'student'
  },
  {
    id: '3',
    name: 'Sarah Investor',
    email: 'investor@example.com',
    password: 'investor123',
    role: 'investor'
  },
  {
    id: '4',
    name: 'Michael Professional',
    email: 'professional@example.com',
    password: 'professional123',
    role: 'professional'
  },
  {
    id: '5',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
    isAdmin: true
  }
];

export async function mockLogin(credentials: AuthCredentials): Promise<User> {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const errors = validateLoginCredentials(credentials);
  if (errors.length > 0) {
    throw new Error(errors[0]);
  }

  const user = users.find(u => 
    u.email === credentials.email && 
    u.password === credentials.password
  );

  if (!user) {
    throw new Error('Invalid credentials');
  }

  if (user.role === 'admin' && !user.isAdmin) {
    throw new Error('Unauthorized access attempt');
  }

  const { password: _, ...safeUser } = user;
  storeUser(safeUser);
  return safeUser;
}

export async function mockLogout(): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 500));
  clearStoredUser();
}

export async function mockRegister(data: RegisterData): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const errors = validateRegistrationData(data);
  if (errors.length > 0) {
    throw new Error(errors[0]);
  }

  const existingUser = users.find(u => u.email === data.email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  if (data.role === 'admin') {
    throw new Error('Invalid role specified');
  }

  const newUser = {
    id: String(users.length + 1),
    ...data,
    isAdmin: false
  };

  users.push(newUser);
}