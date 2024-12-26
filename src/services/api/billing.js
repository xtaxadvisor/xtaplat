import { api } from '../api';
export const billingService = {
    getInvoices: (params) => api.get('/invoices', { params }),
    getInvoiceById: (id) => api.get(`/invoices/${id}`),
    getInvoiceStats: () => api.get('/invoices/stats'),
    createInvoice: (data) => api.post('/invoices', data),
    updateInvoice: ({ id, ...data }) => api.put(`/invoices/${id}`, data),
    deleteInvoice: (id) => api.delete(`/invoices/${id}`),
    markAsPaid: (id) => api.put(`/invoices/${id}/paid`),
    downloadInvoice: (id, format = 'pdf') => api.get(`/invoices/${id}/download?format=${format}`, {
        headers: { Accept: 'application/octet-stream' }
    }),
    sendInvoice: (id) => api.post(`/invoices/${id}/send`),
    getPaymentHistory: (clientId) => api.get(`/clients/${clientId}/payments`),
};
