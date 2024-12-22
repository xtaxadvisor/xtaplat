import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { billingService } from '../services/api/billing';
import { useNotificationStore } from '../lib/store';
export function useBilling() {
    const queryClient = useQueryClient();
    const { addNotification } = useNotificationStore();
    const [filterStatus, setFilterStatus] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const invoicesQuery = useQuery({
        queryKey: ['invoices', filterStatus],
        queryFn: () => billingService.getInvoices(filterStatus !== 'all' ? { status: filterStatus } : undefined)
    });
    const statsQuery = useQuery({
        queryKey: ['invoiceStats'],
        queryFn: billingService.getInvoiceStats
    });
    const createInvoiceMutation = useMutation({
        mutationFn: (data) => billingService.createInvoice(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['invoices'] });
            queryClient.invalidateQueries({ queryKey: ['invoiceStats'] });
            addNotification('Invoice created successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to create invoice', 'error');
        }
    });
    const updateInvoiceMutation = useMutation({
        mutationFn: (data) => billingService.updateInvoice(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['invoices'] });
            queryClient.invalidateQueries({ queryKey: ['invoiceStats'] });
            addNotification('Invoice updated successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to update invoice', 'error');
        }
    });
    const deleteInvoiceMutation = useMutation({
        mutationFn: billingService.deleteInvoice,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['invoices'] });
            queryClient.invalidateQueries({ queryKey: ['invoiceStats'] });
            addNotification('Invoice deleted successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to delete invoice', 'error');
        }
    });
    const markAsPaidMutation = useMutation({
        mutationFn: billingService.markAsPaid,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['invoices'] });
            queryClient.invalidateQueries({ queryKey: ['invoiceStats'] });
            addNotification('Invoice marked as paid', 'success');
        },
        onError: () => {
            addNotification('Failed to mark invoice as paid', 'error');
        }
    });
    const sendInvoiceMutation = useMutation({
        mutationFn: billingService.sendInvoice,
        onSuccess: () => {
            addNotification('Invoice sent successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to send invoice', 'error');
        }
    });
    const downloadInvoice = async (id, format = 'pdf') => {
        try {
            const blob = await billingService.downloadInvoice(id, format);
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `invoice-${id}.${format}`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }
        catch (error) {
            addNotification('Failed to download invoice', 'error');
        }
    };
    const filteredInvoices = invoicesQuery.data?.filter(invoice => {
        const matchesSearch = invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            invoice.number.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'all' || invoice.status === filterStatus;
        return matchesSearch && matchesFilter;
    }) || [];
    return {
        invoices: filteredInvoices,
        stats: statsQuery.data,
        isLoading: invoicesQuery.isLoading || statsQuery.isLoading,
        filterStatus,
        setFilterStatus,
        searchTerm,
        setSearchTerm,
        createInvoice: createInvoiceMutation.mutate,
        updateInvoice: updateInvoiceMutation.mutate,
        deleteInvoice: deleteInvoiceMutation.mutate,
        markAsPaid: markAsPaidMutation.mutate,
        sendInvoice: sendInvoiceMutation.mutate,
        downloadInvoice
    };
}
