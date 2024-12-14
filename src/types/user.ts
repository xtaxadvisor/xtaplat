export interface User {
  id: string;
  email: string;
  displayName: string;
  avatarUrl?: string;
  role: UserRole;
  createdAt: string;
  location?: string;
  bio?: string;
}

export type UserRole = 'user' | 'moderator' | 'admin';

export interface UserProfile extends User {
  threadCount: number;
  replyCount: number;
  joinedAt: string;
  lastActive: string;
}