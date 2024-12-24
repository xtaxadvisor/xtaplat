<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowUp, ArrowDown } from 'lucide-react';
import { formatPercentage } from '../../../../utils/analytics/metrics';
export function MetricComparison({ metrics }) {
    return (_jsx("div", { className: "grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3", children: metrics.map((metric) => {
            const change = ((metric.current - metric.previous) / metric.previous) * 100;
            const progress = (metric.current / metric.target) * 100;
            return (_jsxs("div", { className: "bg-white rounded-lg p-4", children: [_jsxs("div", { className: "flex justify-between items-start mb-2", children: [_jsx("span", { className: "text-sm font-medium text-gray-500", children: metric.label }), _jsxs("div", { className: `flex items-center ${change >= 0 ? 'text-green-600' : 'text-red-600'}`, children: [change >= 0 ? _jsx(ArrowUp, { className: "h-4 w-4" }) : _jsx(ArrowDown, { className: "h-4 w-4" }), _jsx("span", { className: "ml-1 text-sm font-medium", children: formatPercentage(Math.abs(change)) })] })] }), _jsxs("div", { className: "mt-1", children: [_jsxs("span", { className: "text-2xl font-bold text-gray-900", children: [metric.current, metric.unit] }), _jsx("div", { className: "mt-2 h-2 bg-gray-200 rounded-full", children: _jsx("div", { className: "h-2 rounded-full bg-blue-600", style: { width: `${Math.min(progress, 100)}%` } }) }), _jsxs("div", { className: "mt-1 text-xs text-gray-500", children: ["Target: ", metric.target, metric.unit] })] })] }, metric.label));
        }) }));
=======
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { formatPercentage } from '../../../../utils/analytics/metrics';
export function MetricComparison({ metrics }) {
    return (<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => {
            const change = ((metric.current - metric.previous) / metric.previous) * 100;
            const progress = (metric.current / metric.target) * 100;
            return (<div key={metric.label} className="bg-white rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-medium text-gray-500">{metric.label}</span>
              <div className={`flex items-center ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {change >= 0 ? <ArrowUp className="h-4 w-4"/> : <ArrowDown className="h-4 w-4"/>}
                <span className="ml-1 text-sm font-medium">{formatPercentage(Math.abs(change))}</span>
              </div>
            </div>
            <div className="mt-1">
              <span className="text-2xl font-bold text-gray-900">
                {metric.current}{metric.unit}
              </span>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="h-2 rounded-full bg-blue-600" style={{ width: `${Math.min(progress, 100)}%` }}/>
              </div>
              <div className="mt-1 text-xs text-gray-500">
                Target: {metric.target}{metric.unit}
              </div>
            </div>
          </div>);
        })}
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
