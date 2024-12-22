import type { Thread, ThreadFilters } from '../../types/discussion';
export declare const discussionService: {
    getThreads(filters?: ThreadFilters): Promise<Thread[]>;
    createThread(threadData: Omit<Thread, "id" | "createdAt" | "updatedAt" | "likes" | "replies">): Promise<{
        createdAt: string;
        updatedAt: string;
        likes: number;
        replies: number;
        isPinned: boolean;
        title: string;
        content: string;
        category: import("../../types/discussion").ThreadCategory;
        author: import("../../types/user").User;
        tags: string[];
        authorId: string;
        id: any;
    }>;
    updateThread(id: string, updates: Partial<Thread>): Promise<void>;
    deleteThread(id: string): Promise<void>;
};
