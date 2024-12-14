export interface PaymentMethod {
  id: string;
  type: 'credit_card' | 'bank_transfer' | 'check';
  last4?: string;
  expiryDate?: string;
  isDefault: boolean;
}

export interface Payment {
  id: string;
  invoiceId: string;
  amount: number;
  date: string;
  method: PaymentMethod;
  status: 'pending' | 'completed' | 'failed';
  transactionId?: string;
}

export interface BillingSettings {
  currency: string;
  taxRate: number;
  paymentTerms: number;
  invoicePrefix: string;
  invoiceNotes: string;
  acceptedPaymentMethods: string[];
}