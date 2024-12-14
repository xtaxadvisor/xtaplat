import React, { useState } from 'react';
import { CreditCard, DollarSign, AlertCircle } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { useNotificationStore } from '../../../lib/store';

interface PaymentProcessorProps {
  amount: number;
  onSuccess: (transactionId: string) => void;
  onCancel: () => void;
}

export function PaymentProcessor({ amount, onSuccess, onCancel }: PaymentProcessorProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [processing, setProcessing] = useState(false);
  const { addNotification } = useNotificationStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockTransactionId = `txn_${Math.random().toString(36).substr(2, 9)}`;
      onSuccess(mockTransactionId);
      addNotification('Payment processed successfully', 'success');
    } catch (error) {
      addNotification('Payment processing failed', 'error');
    } finally {
      setProcessing(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-center">
          <DollarSign className="h-5 w-5 text-blue-500" />
          <span className="ml-2 text-blue-700 font-medium">
            Amount to pay: ${amount.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <Input
          label="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          maxLength={19}
          placeholder="1234 5678 9012 3456"
          icon={CreditCard}
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Expiry Date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
            maxLength={5}
            placeholder="MM/YY"
            required
          />
          <Input
            label="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength={4}
            type="password"
            placeholder="123"
            required
          />
        </div>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              Secure Payment
            </h3>
            <p className="mt-1 text-sm text-yellow-700">
              Your payment information is encrypted and secure. We never store your full card details.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={processing}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="primary"
          disabled={processing}
        >
          {processing ? 'Processing...' : 'Pay Now'}
        </Button>
      </div>
    </form>
  );
}