import type { Document } from '../../types';
export interface CreateDocumentDTO {
    title: string;
    clientId: string;
    type: string;
    content: string;
    tags?: string[];
}
export interface UpdateDocumentDTO extends Partial<CreateDocumentDTO> {
    id: string;
}
export declare const documentService: {
    getAll: () => Promise<Document[]>;
    getById: (id: string) => Promise<Document>;
    getByClient: (clientId: string) => Promise<Document[]>;
    create: (data: CreateDocumentDTO) => Promise<Document>;
    update: ({ id, ...data }: UpdateDocumentDTO) => Promise<Document>;
    delete: (id: string) => Promise<void>;
    search: (query: string) => Promise<Document[]>;
};
