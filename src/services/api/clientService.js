import { apiClient } from './apiClient';
export const clientService = {
    // Fetch client by ID
    getById: async (id) => {
        try {
            return await apiClient.get(`/clients/${id}`);
        }
        catch (error) {
            console.error(`Failed to fetch client with ID ${id}:`, error);
            throw error;
        }
    },
    // Update a client
    update: async (client) => {
        try {
            return await apiClient.put(`/clients/${client.id}`, client);
        }
        catch (error) {
            console.error(`Failed to update client with ID ${client.id}:`, error);
            throw error;
        }
    },
    // Delete a client
    delete: async (id) => {
        try {
            return await apiClient.delete(`/clients/${id}`);
        }
        catch (error) {
            console.error(`Failed to delete client with ID ${id}:`, error);
            throw error;
        }
    },
};
