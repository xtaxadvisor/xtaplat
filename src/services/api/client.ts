import { api } from '../api';
import type { Client } from '../../types';

export interface CreateClientDTO {
  name: string;
  email: string;
  phone: string;
  company?: string;
  notes?: string;
}

export interface UpdateClientDTO extends Partial<CreateClientDTO> {
  id: string;
}

export const clientService = {
  getAll: () => 
    api.get<Client[]>('/clients'),

  getById: (id: string) => 
    api.get<Client>(`/clients/${id}`),

  create: (data: CreateClientDTO) => 
    api.post<Client>('/clients', data),

  update: ({ id, ...data }: UpdateClientDTO) => 
    api.put<Client>(`/clients/${id}`, data),

  delete: (id: string) => 
    api.delete<void>(`/clients/${id}`),

  search: (query: string) => 
    api.get<Client[]>(`/clients/search?query=${encodeURIComponent(query)}`),
};