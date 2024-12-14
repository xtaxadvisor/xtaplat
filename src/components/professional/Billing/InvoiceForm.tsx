import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { Select } from '../../ui/Select';

interface InvoiceFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export function InvoiceForm({ onSubmit, onCancel }: InvoiceFormProps) {
  const [formData, setFormData] = useState({
    clientName: '',
    dueDate: '',
    items: [{ description: '', quantity: 1, rate: 0, amount: 0 }] as InvoiceItem[],
    notes: ''
  });

  const calculateItemAmount = (quantity: number, rate: number) => {
    return quantity * rate;
  };

  const updateItem = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const newItems = [...formData.items];
    const item = { ...newItems[index], [field]: value };
    
    if (field === 'quantity' || field === 'rate') {
      item.amount = calculateItemAmount(
        field === 'quantity' ? Number(value) : item.quantity,
        field === 'rate' ? Number(value) : item.rate
      );
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

  const removeItem = (index: number) => {
    const newItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: newItems });
  };

  const calculateTotal = () => {
    return formData.items.reduce((sum, item) => sum + item.amount, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      total: calculateTotal()
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          label="Client Name"
          value={formData.clientName}
          onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
          required
        />
        <Input
          type="date"
          label="Due Date"
          value={formData.dueDate}
          onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          required
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Invoice Items</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            icon={Plus}
            onClick={addItem}
          >
            Add Item
          </Button>
        </div>

        {formData.items.map((item, index) => (
          <div key={index} className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-5">
              <Input
                label={index === 0 ? "Description" : ""}
                value={item.description}
                onChange={(e) => updateItem(index, 'description', e.target.value)}
                required
              />
            </div>
            <div className="col-span-2">
              <Input
                type="number"
                label={index === 0 ? "Quantity" : ""}
                value={item.quantity}
                onChange={(e) => updateItem(index, 'quantity', Number(e.target.value))}
                required
                min="1"
              />
            </div>
            <div className="col-span-2">
              <Input
                type="number"
                label={index === 0 ? "Rate" : ""}
                value={item.rate}
                onChange={(e) => updateItem(index, 'rate', Number(e.target.value))}
                required
                min="0"
                step="0.01"
              />
            </div>
            <div className="col-span-2">
              <Input
                label={index === 0 ? "Amount" : ""}
                value={`$${item.amount.toFixed(2)}`}
                readOnly
              />
            </div>
            <div className="col-span-1">
              {formData.items.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  icon={Trash2}
                  onClick={() => removeItem(index)}
                  className="text-red-600 hover:text-red-700"
                />
              )}
            </div>
          </div>
        ))}

        <div className="flex justify-end">
          <div className="w-48">
            <Input
              label="Total Amount"
              value={`$${calculateTotal().toFixed(2)}`}
              readOnly
            />
          </div>
        </div>
      </div>

      <Input
        label="Notes"
        value={formData.notes}
        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        placeholder="Additional notes or payment instructions..."
      />

      <div className="flex justify-end space-x-3">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Create Invoice
        </Button>
      </div>
    </form>
  );
}