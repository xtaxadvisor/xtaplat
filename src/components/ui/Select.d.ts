import React from 'react';
interface Option {
    value: string;
    label: string;
}
interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    label?: string;
    options: Option[];
    error?: string;
    onChange?: (value: string) => void;
}
export declare function Select({ label, options, error, onChange, className, ...props }: SelectProps): any;
export {};
