import React from 'react';
import { ArrowRight, Clock, Check } from 'lucide-react';
import { Button } from '../ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  onBook: () => void;
  popular?: boolean;
}

export function ServiceCard({
  title,
  description,
  price,
  duration,
  features,
  onBook,
  popular
}: ServiceCardProps) {
  return (
    <div className={`relative bg-white rounded-2xl shadow-xl transition-transform hover:scale-105 ${
      popular ? 'border-2 border-blue-500' : ''
    }`}>
      {popular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-500">{description}</p>
        
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="ml-1 text-gray-500">/session</span>
        </div>
        
        <div className="mt-2 flex items-center text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          {duration}
        </div>

        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant="primary"
          className="w-full mt-8"
          icon={ArrowRight}
          iconPosition="right"
          onClick={onBook}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}