import React from 'react';
export function Avatar({ src, alt, size = 'md', className = '' }) {
    const sizes = {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12'
    };
    return (<img src={src} alt={alt} className={`rounded-full object-cover ${sizes[size]} ${className}`}/>);
}
