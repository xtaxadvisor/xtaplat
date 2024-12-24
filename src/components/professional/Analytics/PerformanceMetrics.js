<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
export function PerformanceMetrics({ data }) {
    return (_jsx("div", { className: "space-y-6", children: data?.map((metric, index) => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsx("h4", { className: "text-sm font-medium text-gray-900", children: metric.label }), _jsxs("div", { className: "mt-1 flex items-center", children: [_jsxs("span", { className: "text-2xl font-semibold text-gray-900", children: [metric.value, "%"] }), _jsxs("span", { className: "ml-2 text-sm text-gray-500", children: ["of ", metric.target, "% target"] })] })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: "w-48 bg-gray-200 rounded-full h-2", children: _jsx("div", { className: "bg-blue-600 h-2 rounded-full", style: { width: `${(metric.value / metric.target) * 100}%` } }) }), _jsxs("span", { className: `flex items-center text-sm ${metric.change >= 0 ? 'text-green-600' : 'text-red-600'}`, children: [metric.change >= 0 ? (_jsx(ArrowUpRight, { className: "h-4 w-4 mr-1" })) : (_jsx(ArrowDownRight, { className: "h-4 w-4 mr-1" })), Math.abs(metric.change), "%"] })] })] }, index))) }));
=======
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
export function PerformanceMetrics({ data }) {
    return (<div className="space-y-6">
      {data?.map((metric, index) => (<div key={index} className="flex items-center justify-between">
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">{metric.label}</h4>
            <div className="mt-1 flex items-center">
              <span className="text-2xl font-semibold text-gray-900">
                {metric.value}%
              </span>
              <span className="ml-2 text-sm text-gray-500">
                of {metric.target}% target
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-48 bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(metric.value / metric.target) * 100}%` }}/>
            </div>
            <span className={`flex items-center text-sm ${metric.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {metric.change >= 0 ? (<ArrowUpRight className="h-4 w-4 mr-1"/>) : (<ArrowDownRight className="h-4 w-4 mr-1"/>)}
              {Math.abs(metric.change)}%
            </span>
          </div>
        </div>))}
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
