interface PaymentProcessorProps {
    amount: number;
    onSuccess: (transactionId: string) => void;
    onCancel: () => void;
}
export declare function PaymentProcessor({ amount, onSuccess, onCancel }: PaymentProcessorProps): any;
export {};
