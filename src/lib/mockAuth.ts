import { User } from '../types';
import { createSecureHash } from '../utils/crypto';

// Mock user storage with enhanced admin validation
const users = [
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

export async function mockLogin(email: string, password: string): Promise<User> {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  
  // Additional validation for admin login attempts
  if (user.role === 'admin' && !user.isAdmin) {
    throw new Error('Unauthorized access attempt');
  }
  
  const { password: _, ...safeUser } = user;
  localStorage.setItem('currentUser', JSON.stringify(safeUser));
  return safeUser;
}

export async function mockLogout(): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 500));
  localStorage.removeItem('currentUser');
}

export async function mockCheckAuth(): Promise<User | null> {
  await new Promise(resolve => setTimeout(resolve, 500));
  const userData = localStorage.getItem('currentUser');
  if (!userData) return null;
  
  const user = JSON.parse(userData);
  // Additional validation for stored admin sessions
  if (user.role === 'admin' && !user.isAdmin) {
    localStorage.removeItem('currentUser');
    return null;
  }
  
  return user;
}

export async function mockRegister(userData: {
  name: string;
  email: string;
  password: string;
  role: string;
}): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const existingUser = users.find(u => u.email === userData.email);
  if (existingUser) {
    throw new Error('User already exists');
  }
  
  // Prevent registration of admin users through normal registration
  if (userData.role === 'admin') {
    throw new Error('Invalid role specified');
  }
  
  const newUser = {
    id: String(users.length + 1),
    ...userData,
    isAdmin: false
  };
  
  users.push(newUser);
}