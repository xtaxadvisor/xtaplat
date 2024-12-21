import React from 'react';
import { X } from 'lucide-react';
export function Toast({ message, type, onClose }) {
    const bgColor = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500'
    }[type];
    return (<div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center justify-between`}>
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 hover:opacity-75">
        <X className="h-4 w-4"/>
      </button>
    </div>);
}
