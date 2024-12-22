<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Card({ icon: Icon, title, value, description, className = '' }) {
    return (_jsx("div", { className: `bg-white overflow-hidden shadow rounded-lg ${className}`, children: _jsx("div", { className: "p-5", children: _jsxs("div", { className: "flex items-center", children: [Icon && (_jsx("div", { className: "flex-shrink-0", children: _jsx(Icon, { className: "h-6 w-6 text-blue-600" }) })), _jsx("div", { className: `${Icon ? 'ml-5' : ''} w-0 flex-1`, children: _jsxs("dl", { children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 truncate", children: title }), _jsx("dd", { className: "text-lg font-medium text-gray-900", children: value }), description && (_jsx("dd", { className: "text-sm text-gray-500 mt-1", children: description }))] }) })] }) }) }));
=======
import React from 'react';
export function Card({ icon: Icon, title, value, description, className = '' }) {
    return (<div className={`bg-white overflow-hidden shadow rounded-lg ${className}`}>
      <div className="p-5">
        <div className="flex items-center">
          {Icon && (<div className="flex-shrink-0">
              <Icon className="h-6 w-6 text-blue-600"/>
            </div>)}
          <div className={`${Icon ? 'ml-5' : ''} w-0 flex-1`}>
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd className="text-lg font-medium text-gray-900">{value}</dd>
              {description && (<dd className="text-sm text-gray-500 mt-1">{description}</dd>)}
            </dl>
          </div>
        </div>
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
