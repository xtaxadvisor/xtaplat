<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
export function ChartLegend({ items, position = 'bottom' }) {
    const getLayoutClass = () => {
        switch (position) {
            case 'top':
            case 'bottom':
                return 'flex flex-wrap justify-center gap-4';
            case 'left':
            case 'right':
                return 'flex flex-col gap-2';
        }
    };
<<<<<<< HEAD
    return (_jsx("div", { className: getLayoutClass(), children: items.map((item, index) => (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-3 h-3 rounded-full mr-2", style: { backgroundColor: item.color } }), _jsx("span", { className: "text-sm text-gray-600", children: item.label }), item.value && (_jsx("span", { className: "ml-2 text-sm font-medium text-gray-900", children: item.value }))] }, index))) }));
=======
    return (<div className={getLayoutClass()}>
      {items.map((item, index) => (<div key={index} className="flex items-center">
          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}/>
          <span className="text-sm text-gray-600">{item.label}</span>
          {item.value && (<span className="ml-2 text-sm font-medium text-gray-900">
              {item.value}
            </span>)}
        </div>))}
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
