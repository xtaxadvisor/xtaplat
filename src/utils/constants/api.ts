export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
  },
  USERS: '/users',
  CLIENTS: '/clients',
  CONSULTATIONS: '/consultations',
  DOCUMENTS: '/documents',
  MESSAGES: '/messages',
  ANALYTICS: '/analytics',
  SETTINGS: '/settings',
} as const;

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || '/.netlify/functions',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const;