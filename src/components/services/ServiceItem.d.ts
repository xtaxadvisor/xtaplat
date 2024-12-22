interface ServiceItemProps {
    name: string;
    description: string;
    price: string;
    features: string[];
    duration?: string;
}
export declare function ServiceItem({ name, description, price, features, duration }: ServiceItemProps): any;
export {};
