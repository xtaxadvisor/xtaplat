<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
export function Button({ children, variant = 'primary', size = 'md', icon: Icon, iconPosition = 'left', className = '', ...props }) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-300';
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
    };
    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
    };
<<<<<<< HEAD
    return (_jsxs("button", { className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`, ...props, children: [Icon && iconPosition === 'left' && _jsx(Icon, { className: "mr-2 h-5 w-5" }), children, Icon && iconPosition === 'right' && _jsx(Icon, { className: "ml-2 h-5 w-5" })] }));
=======
    return (<button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {Icon && iconPosition === 'left' && <Icon className="mr-2 h-5 w-5"/>}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="ml-2 h-5 w-5"/>}
    </button>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
