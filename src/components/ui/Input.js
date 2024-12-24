<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
export function Input({ label, error, icon: Icon, helperText, className = '', multiline = false, rows = 4, ...props }) {
    const baseClasses = `
    block w-full rounded-md shadow-sm
    ${Icon ? 'pl-10' : 'pl-3'}
    ${error
        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}
    ${className}
  `;
<<<<<<< HEAD
    return (_jsxs("div", { className: "w-full", children: [label && (_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: label })), _jsxs("div", { className: "relative", children: [Icon && (_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(Icon, { className: "h-5 w-5 text-gray-400" }) })), multiline ? (_jsx("textarea", { ...props, rows: rows, className: baseClasses })) : (_jsx("input", { ...props, className: baseClasses }))] }), (error || helperText) && (_jsx("p", { className: `mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`, children: error || helperText }))] }));
=======
    return (<div className="w-full">
      {label && (<label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>)}
      <div className="relative">
        {Icon && (<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400"/>
          </div>)}
        {multiline ? (<textarea {...props} rows={rows} className={baseClasses}/>) : (<input {...props} className={baseClasses}/>)}
      </div>
      {(error || helperText) && (<p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {error || helperText}
        </p>)}
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
