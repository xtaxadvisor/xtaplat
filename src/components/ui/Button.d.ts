import React from 'react';
import { LucideIcon } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    icon?: LucideIcon;
    iconPosition?: 'left' | 'right';
}
export declare function Button({ children, variant, size, icon: Icon, iconPosition, className, ...props }: ButtonProps): any;
export {};
