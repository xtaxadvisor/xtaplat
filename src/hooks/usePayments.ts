import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { billingService } from '../services/api/billing';
import { useNotificationStore } from '../lib/store';

export function usePayments(clientId?: string) {
  const queryClient = useQueryClient();
  const { addNotification } = useNotificationStore();
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const paymentsQuery = useQuery({
    queryKey: ['payments', clientId, filterStatus],
    queryFn: () => billingService.getPaymentHistory(clientId || ''),
    enabled: !!clientId
  });

  const processPaymentMutation = useMutation({
    mutationFn: billingService.processPayment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
      addNotification('Payment processed successfully', 'success');
    },
    onError: () => {
      addNotification('Payment processing failed', 'error');
    }
  });

  const refundPaymentMutation = useMutation({
    mutationFn: billingService.refundPayment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
      addNotification('Payment refunded successfully', 'success');
    },
    onError: () => {
      addNotification('Refund processing failed', 'error');
    }
  });

  return {
    payments: paymentsQuery.data || [],
    isLoading: paymentsQuery.isLoading,
    filterStatus,
    setFilterStatus,
    processPayment: processPaymentMutation.mutate,
    refundPayment: refundPaymentMutation.mutate
  };
}