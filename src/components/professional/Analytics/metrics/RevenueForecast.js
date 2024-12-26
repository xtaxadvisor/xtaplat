import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LineChart } from '../../charts/LineChart';
import { PredictiveMetrics } from './PredictiveMetrics';
export function RevenueForecast() {
    return (_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Revenue Forecast" }), _jsx(PredictiveMetrics, {}), _jsx("div", { className: "mt-6", children: _jsx(LineChart, {}) })] }));
}
