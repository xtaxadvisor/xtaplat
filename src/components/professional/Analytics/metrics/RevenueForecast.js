<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LineChart } from '../../charts/LineChart';
import { PredictiveMetrics } from './PredictiveMetrics';
export function RevenueForecast() {
    return (_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Revenue Forecast" }), _jsx(PredictiveMetrics, {}), _jsx("div", { className: "mt-6", children: _jsx(LineChart, {}) })] }));
=======
import React from 'react';
import { LineChart } from '../../charts/LineChart';
import { PredictiveMetrics } from './PredictiveMetrics';
export function RevenueForecast() {
    return (<div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Forecast</h3>
      <PredictiveMetrics />
      <div className="mt-6">
        <LineChart />
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
