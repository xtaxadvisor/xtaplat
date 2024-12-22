import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { CreditCard, DollarSign, Plus } from 'lucide-react';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { Select } from '../../ui/Select';
import { Card } from '../../ui/Card';
export function BillingSettings({ settings, onSave, isLoading }) {
    const [formData, setFormData] = useState({
        defaultCurrency: settings?.defaultCurrency || 'USD',
        taxRate: settings?.taxRate || 0,
        paymentTerms: settings?.paymentTerms || 30,
        invoicePrefix: settings?.invoicePrefix || 'INV-',
        defaultNotes: settings?.defaultNotes || '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Payment Settings" }), _jsxs("div", { className: "space-y-4", children: [_jsx(Select, { label: "Default Currency", options: [
                                            { value: 'USD', label: 'USD - US Dollar' },
                                            { value: 'EUR', label: 'EUR - Euro' },
                                            { value: 'GBP', label: 'GBP - British Pound' }
                                        ], value: formData.defaultCurrency, onChange: (value) => setFormData({ ...formData, defaultCurrency: value }) }), _jsx(Input, { type: "number", label: "Tax Rate (%)", value: formData.taxRate, onChange: (e) => setFormData({ ...formData, taxRate: Number(e.target.value) }), min: "0", max: "100", step: "0.01" }), _jsx(Input, { type: "number", label: "Payment Terms (days)", value: formData.paymentTerms, onChange: (e) => setFormData({ ...formData, paymentTerms: Number(e.target.value) }), min: "0" })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Invoice Settings" }), _jsxs("div", { className: "space-y-4", children: [_jsx(Input, { label: "Invoice Prefix", value: formData.invoicePrefix, onChange: (e) => setFormData({ ...formData, invoicePrefix: e.target.value }) }), _jsx(Input, { label: "Default Invoice Notes", value: formData.defaultNotes, onChange: (e) => setFormData({ ...formData, defaultNotes: e.target.value }), multiline: true, rows: 4 })] })] })] }), _jsxs("div", { className: "mt-8", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Payment Methods" }), _jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", children: [_jsx(Card, { icon: CreditCard, title: "Credit Card", value: "\u2022\u2022\u2022\u2022 4242", description: "Expires 12/24" }), _jsx("button", { className: "border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", children: _jsxs("div", { className: "flex flex-col items-center", children: [_jsx(Plus, { className: "h-8 w-8 text-gray-400" }), _jsx("span", { className: "mt-2 text-sm font-medium text-gray-900", children: "Add Payment Method" })] }) })] })] }), _jsx("div", { className: "flex justify-end", children: _jsx(Button, { type: "submit", variant: "primary", disabled: isLoading, icon: DollarSign, children: isLoading ? 'Saving...' : 'Save Billing Settings' }) })] }));
}
