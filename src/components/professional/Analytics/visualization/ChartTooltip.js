<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { formatNumber } from '../../../../utils/format';
export function ChartTooltip({ active, payload, label, valuePrefix = '', valueSuffix = '' }) {
    if (!active || !payload)
        return null;
<<<<<<< HEAD
    return (_jsxs("div", { className: "bg-white p-3 border rounded shadow-lg", children: [_jsx("p", { className: "text-sm font-medium text-gray-900", children: label }), payload.map((entry, index) => (_jsxs("p", { className: "text-sm text-gray-600", children: [entry.dataKey, ": ", valuePrefix, formatNumber(entry.value), valueSuffix] }, index)))] }));
=======
    return (<div className="bg-white p-3 border rounded shadow-lg">
      <p className="text-sm font-medium text-gray-900">{label}</p>
      {payload.map((entry, index) => (<p key={index} className="text-sm text-gray-600">
          {entry.dataKey}: {valuePrefix}{formatNumber(entry.value)}{valueSuffix}
        </p>))}
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
