import React from 'react';
import { formatNumber } from '../../../../utils/format';
export function ChartTooltip({ active, payload, label, valuePrefix = '', valueSuffix = '' }) {
    if (!active || !payload)
        return null;
    return (<div className="bg-white p-3 border rounded shadow-lg">
      <p className="text-sm font-medium text-gray-900">{label}</p>
      {payload.map((entry, index) => (<p key={index} className="text-sm text-gray-600">
          {entry.dataKey}: {valuePrefix}{formatNumber(entry.value)}{valueSuffix}
        </p>))}
    </div>);
}
