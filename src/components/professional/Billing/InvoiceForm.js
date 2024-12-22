import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
export function InvoiceForm({ onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        clientName: '',
        dueDate: '',
        items: [{ description: '', quantity: 1, rate: 0, amount: 0 }],
        notes: ''
    });
    const calculateItemAmount = (quantity, rate) => {
        return quantity * rate;
    };
    const updateItem = (index, field, value) => {
        const newItems = [...formData.items];
        const item = { ...newItems[index], [field]: value };
        if (field === 'quantity' || field === 'rate') {
            item.amount = calculateItemAmount(field === 'quantity' ? Number(value) : item.quantity, field === 'rate' ? Number(value) : item.rate);
        }
        newItems[index] = item;
        setFormData({ ...formData, items: newItems });
    };
    const addItem = () => {
        setFormData({
            ...formData,
            items: [...formData.items, { description: '', quantity: 1, rate: 0, amount: 0 }]
        });
    };
    const removeItem = (index) => {
        const newItems = formData.items.filter((_, i) => i !== index);
        setFormData({ ...formData, items: newItems });
    };
    const calculateTotal = () => {
        return formData.items.reduce((sum, item) => sum + item.amount, 0);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            ...formData,
            total: calculateTotal()
        });
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [_jsx(Input, { label: "Client Name", value: formData.clientName, onChange: (e) => setFormData({ ...formData, clientName: e.target.value }), required: true }), _jsx(Input, { type: "date", label: "Due Date", value: formData.dueDate, onChange: (e) => setFormData({ ...formData, dueDate: e.target.value }), required: true })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Invoice Items" }), _jsx(Button, { type: "button", variant: "outline", size: "sm", icon: Plus, onClick: addItem, children: "Add Item" })] }), formData.items.map((item, index) => (_jsxs("div", { className: "grid grid-cols-12 gap-4 items-end", children: [_jsx("div", { className: "col-span-5", children: _jsx(Input, { label: index === 0 ? "Description" : "", value: item.description, onChange: (e) => updateItem(index, 'description', e.target.value), required: true }) }), _jsx("div", { className: "col-span-2", children: _jsx(Input, { type: "number", label: index === 0 ? "Quantity" : "", value: item.quantity, onChange: (e) => updateItem(index, 'quantity', Number(e.target.value)), required: true, min: "1" }) }), _jsx("div", { className: "col-span-2", children: _jsx(Input, { type: "number", label: index === 0 ? "Rate" : "", value: item.rate, onChange: (e) => updateItem(index, 'rate', Number(e.target.value)), required: true, min: "0", step: "0.01" }) }), _jsx("div", { className: "col-span-2", children: _jsx(Input, { label: index === 0 ? "Amount" : "", value: `$${item.amount.toFixed(2)}`, readOnly: true }) }), _jsx("div", { className: "col-span-1", children: formData.items.length > 1 && (_jsx(Button, { type: "button", variant: "ghost", size: "sm", icon: Trash2, onClick: () => removeItem(index), className: "text-red-600 hover:text-red-700" })) })] }, index))), _jsx("div", { className: "flex justify-end", children: _jsx("div", { className: "w-48", children: _jsx(Input, { label: "Total Amount", value: `$${calculateTotal().toFixed(2)}`, readOnly: true }) }) })] }), _jsx(Input, { label: "Notes", value: formData.notes, onChange: (e) => setFormData({ ...formData, notes: e.target.value }), placeholder: "Additional notes or payment instructions..." }), _jsxs("div", { className: "flex justify-end space-x-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: onCancel, children: "Cancel" }), _jsx(Button, { type: "submit", variant: "primary", children: "Create Invoice" })] })] }));
}
