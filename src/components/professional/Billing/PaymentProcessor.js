import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { CreditCard, DollarSign, AlertCircle } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { useNotificationStore } from '../../../lib/store';
export function PaymentProcessor({ amount, onSuccess, onCancel }) {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [processing, setProcessing] = useState(false);
    const { addNotification } = useNotificationStore();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        try {
            // Simulate payment processing
            await new Promise(resolve => setTimeout(resolve, 2000));
            const mockTransactionId = `txn_${Math.random().toString(36).substr(2, 9)}`;
            onSuccess(mockTransactionId);
            addNotification('Payment processed successfully', 'success');
        }
        catch (error) {
            addNotification('Payment processing failed', 'error');
        }
        finally {
            setProcessing(false);
        }
    };
    const formatCardNumber = (value) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || '';
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        if (parts.length) {
            return parts.join(' ');
        }
        else {
            return value;
        }
    };
    const formatExpiryDate = (value) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (v.length >= 2) {
            return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
        }
        return v;
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx("div", { className: "bg-blue-50 p-4 rounded-lg", children: _jsxs("div", { className: "flex items-center", children: [_jsx(DollarSign, { className: "h-5 w-5 text-blue-500" }), _jsxs("span", { className: "ml-2 text-blue-700 font-medium", children: ["Amount to pay: $", amount.toFixed(2)] })] }) }), _jsxs("div", { className: "space-y-4", children: [_jsx(Input, { label: "Card Number", value: cardNumber, onChange: (e) => setCardNumber(formatCardNumber(e.target.value)), maxLength: 19, placeholder: "1234 5678 9012 3456", icon: CreditCard, required: true }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsx(Input, { label: "Expiry Date", value: expiryDate, onChange: (e) => setExpiryDate(formatExpiryDate(e.target.value)), maxLength: 5, placeholder: "MM/YY", required: true }), _jsx(Input, { label: "CVV", value: cvv, onChange: (e) => setCvv(e.target.value), maxLength: 4, type: "password", placeholder: "123", required: true })] })] }), _jsx("div", { className: "bg-yellow-50 p-4 rounded-lg", children: _jsxs("div", { className: "flex items-start", children: [_jsx(AlertCircle, { className: "h-5 w-5 text-yellow-500 mt-0.5" }), _jsxs("div", { className: "ml-3", children: [_jsx("h3", { className: "text-sm font-medium text-yellow-800", children: "Secure Payment" }), _jsx("p", { className: "mt-1 text-sm text-yellow-700", children: "Your payment information is encrypted and secure. We never store your full card details." })] })] }) }), _jsxs("div", { className: "flex justify-end space-x-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: onCancel, disabled: processing, children: "Cancel" }), _jsx(Button, { type: "submit", variant: "primary", disabled: processing, children: processing ? 'Processing...' : 'Pay Now' })] })] }));
}
