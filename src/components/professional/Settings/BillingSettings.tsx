import React, { useState } from 'react';
import { CreditCard, DollarSign, Plus } from 'lucide-react';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { Select } from '../../ui/Select';
import { Card } from '../../ui/Card';

interface BillingSettingsProps {
  settings: any;
  onSave: (data: any) => void;
  isLoading: boolean;
}

export function BillingSettings({ settings, onSave, isLoading }: BillingSettingsProps) {
  const [formData, setFormData] = useState({
    defaultCurrency: settings?.defaultCurrency || 'USD',
    taxRate: settings?.taxRate || 0,
    paymentTerms: settings?.paymentTerms || 30,
    invoicePrefix: settings?.invoicePrefix || 'INV-',
    defaultNotes: settings?.defaultNotes || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Settings</h3>
          <div className="space-y-4">
            <Select
              label="Default Currency"
              options={[
                { value: 'USD', label: 'USD - US Dollar' },
                { value: 'EUR', label: 'EUR - Euro' },
                { value: 'GBP', label: 'GBP - British Pound' }
              ]}
              value={formData.defaultCurrency}
              onChange={(value) => setFormData({ ...formData, defaultCurrency: value })}
            />
            <Input
              type="number"
              label="Tax Rate (%)"
              value={formData.taxRate}
              onChange={(e) => setFormData({ ...formData, taxRate: Number(e.target.value) })}
              min="0"
              max="100"
              step="0.01"
            />
            <Input
              type="number"
              label="Payment Terms (days)"
              value={formData.paymentTerms}
              onChange={(e) => setFormData({ ...formData, paymentTerms: Number(e.target.value) })}
              min="0"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Invoice Settings</h3>
          <div className="space-y-4">
            <Input
              label="Invoice Prefix"
              value={formData.invoicePrefix}
              onChange={(e) => setFormData({ ...formData, invoicePrefix: e.target.value })}
            />
            <Input
              label="Default Invoice Notes"
              value={formData.defaultNotes}
              onChange={(e) => setFormData({ ...formData, defaultNotes: e.target.value })}
              multiline
              rows={4}
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Methods</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={CreditCard}
            title="Credit Card"
            value="•••• 4242"
            description="Expires 12/24"
          />
          <button className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <div className="flex flex-col items-center">
              <Plus className="h-8 w-8 text-gray-400" />
              <span className="mt-2 text-sm font-medium text-gray-900">
                Add Payment Method
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          variant="primary"
          disabled={isLoading}
          icon={DollarSign}
        >
          {isLoading ? 'Saving...' : 'Save Billing Settings'}
        </Button>
      </div>
    </form>
  );
}