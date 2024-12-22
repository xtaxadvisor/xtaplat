import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { DollarSign, Plus, Download, Search, Filter, FileText, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';
import { Modal } from '../ui/Modal';
import { InvoiceForm } from './InvoiceForm';
export function Billing() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const invoices = [
        {
            id: 'INV-2024-001',
            clientName: 'Acme Corporation',
            amount: 5000,
            status: 'paid',
            dueDate: '2024-03-15',
            items: [
                { description: 'Tax Consultation', quantity: 10, rate: 250, amount: 2500 },
                { description: 'Financial Planning', quantity: 5, rate: 500, amount: 2500 }
            ]
        },
        {
            id: 'INV-2024-002',
            clientName: 'Tech Startups Inc',
            amount: 3500,
            status: 'pending',
            dueDate: '2024-03-30',
            items: [
                { description: 'Business Advisory', quantity: 7, rate: 500, amount: 3500 }
            ]
        },
        {
            id: 'INV-2024-003',
            clientName: 'Global Ventures LLC',
            amount: 7500,
            status: 'overdue',
            dueDate: '2024-03-10',
            items: [
                { description: 'Tax Return Preparation', quantity: 1, rate: 5000, amount: 5000 },
                { description: 'Audit Support', quantity: 5, rate: 500, amount: 2500 }
            ]
        }
    ];
    const getStatusColor = (status) => {
        switch (status) {
            case 'paid':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'overdue':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    const getStatusIcon = (status) => {
        switch (status) {
            case 'paid':
                return CheckCircle;
            case 'overdue':
                return XCircle;
            default:
                return Clock;
        }
    };
    const filteredInvoices = invoices.filter(invoice => {
        const matchesSearch = invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'all' || invoice.status === filterStatus;
        return matchesSearch && matchesFilter;
    });
    const totalRevenue = filteredInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);
    const overdueAmount = filteredInvoices
        .filter(invoice => invoice.status === 'overdue')
        .reduce((sum, invoice) => sum + invoice.amount, 0);
    const pendingAmount = filteredInvoices
        .filter(invoice => invoice.status === 'pending')
        .reduce((sum, invoice) => sum + invoice.amount, 0);
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Billing & Invoices" }), _jsx(Button, { variant: "primary", icon: Plus, onClick: () => setIsModalOpen(true), children: "Create Invoice" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsx("div", { className: "bg-white rounded-lg shadow p-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "p-3 rounded-full bg-blue-100 text-blue-600", children: _jsx(DollarSign, { className: "h-6 w-6" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "Total Revenue" }), _jsxs("p", { className: "text-2xl font-semibold text-gray-900", children: ["$", totalRevenue.toLocaleString()] })] })] }) }), _jsx("div", { className: "bg-white rounded-lg shadow p-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "p-3 rounded-full bg-yellow-100 text-yellow-600", children: _jsx(Clock, { className: "h-6 w-6" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "Pending Amount" }), _jsxs("p", { className: "text-2xl font-semibold text-gray-900", children: ["$", pendingAmount.toLocaleString()] })] })] }) }), _jsx("div", { className: "bg-white rounded-lg shadow p-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "p-3 rounded-full bg-red-100 text-red-600", children: _jsx(XCircle, { className: "h-6 w-6" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "Overdue Amount" }), _jsxs("p", { className: "text-2xl font-semibold text-gray-900", children: ["$", overdueAmount.toLocaleString()] })] })] }) })] }), _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 mb-6", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("div", { className: "relative flex-1 min-w-[300px]", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("input", { type: "text", placeholder: "Search invoices...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Filter, { className: "h-5 w-5 text-gray-400" }), _jsx(Select, { options: [
                                                        { value: 'all', label: 'All Status' },
                                                        { value: 'paid', label: 'Paid' },
                                                        { value: 'pending', label: 'Pending' },
                                                        { value: 'overdue', label: 'Overdue' }
                                                    ], value: filterStatus, onChange: setFilterStatus })] })] }), _jsx(Button, { variant: "outline", icon: Download, children: "Export Invoices" })] }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Invoice" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Client" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Amount" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Due Date" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: filteredInvoices.map((invoice) => {
                                            const StatusIcon = getStatusIcon(invoice.status);
                                            return (_jsxs("tr", { className: "hover:bg-gray-50", children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("div", { className: "flex items-center", children: [_jsx(FileText, { className: "h-5 w-5 text-gray-400 mr-2" }), _jsx("span", { className: "text-sm font-medium text-gray-900", children: invoice.id })] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: "text-sm text-gray-900", children: invoice.clientName }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("span", { className: "text-sm font-medium text-gray-900", children: ["$", invoice.amount.toLocaleString()] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`, children: [_jsx(StatusIcon, { className: "h-4 w-4 mr-1" }), invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(invoice.dueDate).toLocaleDateString() }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium", children: _jsxs("div", { className: "flex space-x-3", children: [_jsx(Button, { variant: "ghost", size: "sm", icon: Download, children: "Download" }), _jsx(Button, { variant: "ghost", size: "sm", children: "View" })] }) })] }, invoice.id));
                                        }) })] }) })] }) }), _jsx(Modal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false), title: "Create New Invoice", children: _jsx(InvoiceForm, { onSubmit: (data) => {
                        console.log('Invoice data:', data);
                        setIsModalOpen(false);
                    }, onCancel: () => setIsModalOpen(false) }) })] }));
}
