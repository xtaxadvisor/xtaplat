import { apiClient } from './apiClient';
import type { Client } from '../../types';
import type { CreateClientDTO, UpdateClientDTO } from './apiClient';

export const clientService = {
  // Fetch client by ID
  getById: async (id: string): Promise<Client> => {
    try {
      return await apiClient.get<Client>(`/clients/${id}`);
    } catch (error) {
      console.error(`Failed to fetch client with ID ${id}:`, error);
      throw error;
    }
  },

  // Update a client
  update: async (client: UpdateClientDTO): Promise<Client> => {
    try {
      return await apiClient.put<Client>(`/clients/${client.id}`, client);
    } catch (error) {
      console.error(`Failed to update client with ID ${client.id}:`, error);
      throw error;
    }
  },

  // Delete a client
  delete: async (id: string): Promise<void> => {
    try {
      return await apiClient.delete<void>(`/clients/${id}`);
    } catch (error) {
      console.error(`Failed to delete client with ID ${id}:`, error);
      throw error;
    }
  },
};