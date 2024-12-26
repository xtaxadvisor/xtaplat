import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formatNumber } from '../../../../utils/format';
export function ChartTooltip({ active, payload, label, valuePrefix = '', valueSuffix = '' }) {
    if (!active || !payload)
        return null;
    return (_jsxs("div", { className: "bg-white p-3 border rounded shadow-lg", children: [_jsx("p", { className: "text-sm font-medium text-gray-900", children: label }), payload.map((entry, index) => (_jsxs("p", { className: "text-sm text-gray-600", children: [entry.dataKey, ": ", valuePrefix, formatNumber(entry.value), valueSuffix] }, index)))] }));
}
