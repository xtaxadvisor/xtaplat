import { api } from '../api';
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

export const documentService = {
  getAll: () => 
    api.get<Document[]>('/documents'),

  getById: (id: string) => 
    api.get<Document>(`/documents/${id}`),

  getByClient: (clientId: string) => 
    api.get<Document[]>(`/clients/${clientId}/documents`),

  create: (data: CreateDocumentDTO) => 
    api.post<Document>('/documents', data),

  update: ({ id, ...data }: UpdateDocumentDTO) => 
    api.put<Document>(`/documents/${id}`, data),

  delete: (id: string) => 
    api.delete<void>(`/documents/${id}`),

  search: (query: string) => 
    api.get<Document[]>('/documents/search', { params: { query } }),
};