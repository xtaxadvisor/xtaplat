<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function HealthScore({ score, metrics }) {
    return (_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Financial Health Score" }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "flex-1", children: _jsx("div", { className: "h-4 bg-gray-200 rounded-full", children: _jsx("div", { className: "h-4 bg-green-500 rounded-full", style: { width: `${score}%` } }) }) }), _jsxs("span", { className: "ml-4 text-2xl font-bold text-green-500", children: [score, "/100"] })] }), _jsx("div", { className: "mt-4 grid grid-cols-3 gap-4", children: metrics.map((metric) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-sm font-medium text-gray-500", children: metric.name }), _jsxs("div", { className: "text-lg font-semibold text-gray-900", children: [metric.score, "/100"] })] }, metric.name))) })] }));
=======
import React from 'react';
export function HealthScore({ score, metrics }) {
    return (<div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Financial Health Score</h3>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded-full">
            <div className="h-4 bg-green-500 rounded-full" style={{ width: `${score}%` }}/>
          </div>
        </div>
        <span className="ml-4 text-2xl font-bold text-green-500">{score}/100</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {metrics.map((metric) => (<div key={metric.name} className="text-center">
            <div className="text-sm font-medium text-gray-500">{metric.name}</div>
            <div className="text-lg font-semibold text-gray-900">{metric.score}/100</div>
          </div>))}
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
