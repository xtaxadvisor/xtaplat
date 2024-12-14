import type { User } from './user';

export interface Thread {
  id: string;
  title: string;
  content: string;
  authorId: string;
  author: User;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  likes: number;
  replies: number;
  isPinned: boolean;
  category: ThreadCategory;
}

export interface Reply {
  id: string;
  threadId: string;
  content: string;
  authorId: string;
  author: User;
  createdAt: string;
  updatedAt: string;
  likes: number;
  parentId?: string;
}

export type ThreadCategory = 
  | 'buying'
  | 'selling'
  | 'hoa'
  | 'maintenance'
  | 'insurance'
  | 'contractors'
  | 'tenants'
  | 'legal'
  | 'market-trends'
  | 'general';

export interface ThreadFilters {
  category?: ThreadCategory;
  location?: string;
  tags?: string[];
  sortBy?: 'recent' | 'popular' | 'unanswered';
  timeframe?: 'day' | 'week' | 'month' | 'year' | 'all';
}