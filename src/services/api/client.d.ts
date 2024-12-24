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
export declare const clientService: {
    getAll: () => Promise<Client[]>;
    getById: (id: string) => Promise<Client>;
    create: (data: CreateClientDTO) => Promise<Client>;
    update: ({ id, ...data }: UpdateClientDTO) => Promise<Client>;
    delete: (id: string) => Promise<void>;
    search: (query: string) => Promise<Client[]>;
};
