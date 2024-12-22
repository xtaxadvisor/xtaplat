interface Payment {
    id: string;
    date: string;
    amount: number;
    status: 'completed' | 'pending' | 'failed';
    method: string;
    reference: string;
}
interface PaymentHistoryProps {
    payments: Payment[];
}
export declare function PaymentHistory({ payments }: PaymentHistoryProps): any;
export {};
