import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon?: LucideIcon;
  title: string;
  value: string | number;
  description?: string;
  className?: string;
}

export function Card({ icon: Icon, title, value, description, className = '' }: CardProps) {
  return (
    <div className={`bg-white overflow-hidden shadow rounded-lg ${className}`}>
      <div className="p-5">
        <div className="flex items-center">
          {Icon && (
            <div className="flex-shrink-0">
              <Icon className="h-6 w-6 text-blue-600" />
            </div>
          )}
          <div className={`${Icon ? 'ml-5' : ''} w-0 flex-1`}>
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd className="text-lg font-medium text-gray-900">{value}</dd>
              {description && (
                <dd className="text-sm text-gray-500 mt-1">{description}</dd>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}