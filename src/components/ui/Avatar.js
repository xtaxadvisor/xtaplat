<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
export function Avatar({ src, alt, size = 'md', className = '' }) {
    const sizes = {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12'
    };
<<<<<<< HEAD
    return (_jsx("img", { src: src, alt: alt, className: `rounded-full object-cover ${sizes[size]} ${className}` }));
=======
    return (<img src={src} alt={alt} className={`rounded-full object-cover ${sizes[size]} ${className}`}/>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
