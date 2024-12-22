import type { Document } from '../../../types';
interface DocumentGridProps {
    documents: Document[];
    isLoading: boolean;
    onDelete: (id: string) => void;
    onShare: (id: string) => void;
}
export declare function DocumentGrid({ documents, isLoading, onDelete, onShare }: DocumentGridProps): any;
export {};
