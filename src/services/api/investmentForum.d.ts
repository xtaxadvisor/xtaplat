export interface InvestmentThread {
    id: string;
    title: string;
    content: string;
    category: 'real-estate' | 'maintenance' | 'market-analysis' | 'property-management';
    author: {
        id: string;
        name: string;
        role: string;
    };
    createdAt: string;
    updatedAt: string;
    replies: number;
    views: number;
    tags: string[];
    isPinned: boolean;
}
export declare const investmentForumService: {
    getThreads: (category?: string) => Promise<InvestmentThread[]>;
    getThreadById: (id: string) => Promise<InvestmentThread>;
    createThread: (data: Omit<InvestmentThread, "id" | "createdAt" | "updatedAt" | "replies" | "views">) => Promise<InvestmentThread>;
    updateThread: (id: string, data: Partial<InvestmentThread>) => Promise<InvestmentThread>;
    deleteThread: (id: string) => Promise<void>;
};
