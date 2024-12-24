export interface InvoiceItem {
    id?: string;
    description: string;
    quantity: number;
    rate: number;
    amount: number;
}
export interface Invoice {
    id: string;
    clientId: string;
    clientName: string;
    number: string;
    issueDate: string;
    dueDate: string;
    items: InvoiceItem[];
    subtotal: number;
    tax: number;
    total: number;
    status: 'draft' | 'pending' | 'paid' | 'overdue';
    notes?: string;
}
export interface CreateInvoiceDTO {
    clientId: string;
    dueDate: string;
    items: Omit<InvoiceItem, 'id'>[];
    notes?: string;
}
export interface UpdateInvoiceDTO extends Partial<CreateInvoiceDTO> {
    id: string;
    status?: Invoice['status'];
}
export interface InvoiceStats {
    totalRevenue: number;
    pendingAmount: number;
    overdueAmount: number;
    invoiceCount: number;
    paidCount: number;
    overdueCount: number;
}
export declare const billingService: {
    getInvoices: (params?: {
        status?: string;
        clientId?: string;
    }) => Promise<Invoice[]>;
    getInvoiceById: (id: string) => Promise<Invoice>;
    getInvoiceStats: () => Promise<InvoiceStats>;
    createInvoice: (data: CreateInvoiceDTO) => Promise<Invoice>;
    updateInvoice: ({ id, ...data }: UpdateInvoiceDTO) => Promise<Invoice>;
    deleteInvoice: (id: string) => Promise<void>;
    markAsPaid: (id: string) => Promise<Invoice>;
    downloadInvoice: (id: string, format?: "pdf" | "csv") => Promise<Blob>;
    sendInvoice: (id: string) => Promise<void>;
    getPaymentHistory: (clientId: string) => Promise<{
        id: string;
        invoiceId: string;
        amount: number;
        date: string;
        method: string;
    }[]>;
};
