export interface ProcessingStep {
    id: string;
    name: string;
    status: 'pending' | 'processing' | 'completed' | 'error';
    startedAt?: string;
    completedAt?: string;
    error?: string;
}
export interface QueuedDocument {
    id: string;
    name: string;
    status: 'pending' | 'processing' | 'completed' | 'failed';
    queuedAt: string;
    startedAt?: string;
    completedAt?: string;
    error?: string;
    steps: ProcessingStep[];
}
