export declare function useBilling(): {
    invoices: any;
    stats: any;
    isLoading: any;
    filterStatus: any;
    setFilterStatus: any;
    searchTerm: any;
    setSearchTerm: any;
    createInvoice: any;
    updateInvoice: any;
    deleteInvoice: any;
    markAsPaid: any;
    sendInvoice: any;
    downloadInvoice: (id: string, format?: "pdf" | "csv") => Promise<void>;
};
