import type { QueuedDocument } from '../../types/documents';
export declare function calculateQueueMetrics(documents: QueuedDocument[]): {
    totalDocuments: number;
    pending: number;
    processing: number;
    completed: number;
    failed: number;
    averageProcessingTime: number;
};
