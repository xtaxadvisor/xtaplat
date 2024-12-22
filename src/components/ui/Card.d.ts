import { LucideIcon } from 'lucide-react';
interface CardProps {
    icon?: LucideIcon;
    title: string;
    value: string | number;
    description?: string;
    className?: string;
}
export declare function Card({ icon: Icon, title, value, description, className }: CardProps): any;
export {};
