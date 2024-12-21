import React from 'react';
export function Select({ label, options, error, onChange, className = '', ...props }) {
    return (<div className="w-full">
      {label && (<label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>)}
      <select className={`
          block w-full rounded-md shadow-sm pl-3 pr-10 py-2
          ${error
            ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}
          ${className}
        `} onChange={(e) => onChange?.(e.target.value)} {...props}>
        {options.map((option) => (<option key={option.value} value={option.value}>
            {option.label}
          </option>))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>);
}
