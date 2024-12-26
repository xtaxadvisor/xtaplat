import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertTriangle } from 'lucide-react';
import { identifyAnomalies } from '../../../../utils/analytics/insights';
import { formatDate } from '../../../../utils/date';
export function AnomalyDetection({ data, metric, threshold = 2 }) {
    const values = data.map(d => d.value);
    const anomalies = identifyAnomalies(values, threshold);
    if (anomalies.length === 0)
        return null;
    return (_jsx("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4", children: _jsxs("div", { className: "flex items-start", children: [_jsx(AlertTriangle, { className: "h-5 w-5 text-yellow-500 mt-0.5" }), _jsxs("div", { className: "ml-3", children: [_jsxs("h4", { className: "text-sm font-medium text-yellow-800", children: ["Anomalies Detected in ", metric] }), _jsx("ul", { className: "mt-2 space-y-1", children: anomalies.map(index => (_jsxs("li", { className: "text-sm text-yellow-700", children: ["Unusual value (", data[index].value, ") detected on ", formatDate(data[index].date)] }, index))) })] })] }) }));
}
