import { LucideIcon } from 'lucide-react';
interface Service {
    name: string;
    description: string;
    price: string;
    features: string[];
    duration?: string;
}
interface ServiceCategoryProps {
    title: string;
    icon: LucideIcon;
    services: Service[];
}
export declare function ServiceCategory({ title, icon: Icon, services }: ServiceCategoryProps): any;
export {};
