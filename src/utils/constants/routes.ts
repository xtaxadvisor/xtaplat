export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  ADMIN: '/admin',
  PROFESSIONAL: '/professional',
  INVESTOR: '/investor',
  SERVICES: '/services',
  SAME_DAY_SERVICES: '/same-day-services',
  VIDEOS: '/browse-videos',
  CONSULTATION: '/consultation',
} as const;

export const PROTECTED_ROUTES = [
  ROUTES.DASHBOARD,
  ROUTES.ADMIN,
  ROUTES.PROFESSIONAL,
  ROUTES.INVESTOR,
] as const;

export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.LOGIN,
  ROUTES.REGISTER,
  ROUTES.SERVICES,
  ROUTES.SAME_DAY_SERVICES,
  ROUTES.VIDEOS,
] as const;