import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
}

export function Input({
  label,
  error,
  icon: Icon,
  helperText,
  className = '',
  multiline = false,
  rows = 4,
  ...props
}: InputProps) {
  const baseClasses = `
    block w-full rounded-md shadow-sm
    ${Icon ? 'pl-10' : 'pl-3'}
    ${error
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
    }
    ${className}
  `;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        {multiline ? (
          <textarea
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            rows={rows}
            className={baseClasses}
          />
        ) : (
          <input
            {...props}
            className={baseClasses}
          />
        )}
      </div>
      {(error || helperText) && (
        <p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
}