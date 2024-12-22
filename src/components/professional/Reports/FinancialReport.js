<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { RevenueChart } from '../charts/RevenueChart';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
export function FinancialReport({ dateRange, isLoading }) {
    if (isLoading) {
<<<<<<< HEAD
        return _jsx(LoadingSpinner, {});
    }
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsx("div", { className: "bg-white p-6 rounded-lg shadow", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "p-3 rounded-full bg-blue-100 text-blue-600", children: _jsx(DollarSign, { className: "h-6 w-6" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "Total Revenue" }), _jsx("p", { className: "text-2xl font-semibold text-gray-900", children: "$124,500" }), _jsxs("p", { className: "mt-1 text-sm text-green-600 flex items-center", children: [_jsx(ArrowUpRight, { className: "h-4 w-4 mr-1" }), "12% increase"] })] })] }) }), _jsx("div", { className: "bg-white p-6 rounded-lg shadow", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "p-3 rounded-full bg-green-100 text-green-600", children: _jsx(TrendingUp, { className: "h-6 w-6" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "Average Invoice" }), _jsx("p", { className: "text-2xl font-semibold text-gray-900", children: "$2,850" }), _jsxs("p", { className: "mt-1 text-sm text-green-600 flex items-center", children: [_jsx(ArrowUpRight, { className: "h-4 w-4 mr-1" }), "5% increase"] })] })] }) }), _jsx("div", { className: "bg-white p-6 rounded-lg shadow", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "p-3 rounded-full bg-red-100 text-red-600", children: _jsx(DollarSign, { className: "h-6 w-6" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "Outstanding" }), _jsx("p", { className: "text-2xl font-semibold text-gray-900", children: "$15,200" }), _jsxs("p", { className: "mt-1 text-sm text-red-600 flex items-center", children: [_jsx(ArrowDownRight, { className: "h-4 w-4 mr-1" }), "2% increase"] })] })] }) })] }), _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Revenue Trends" }), _jsx(RevenueChart, {})] }) }), _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Financial Summary" }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Category" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Current Period" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Previous Period" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Change" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: [
                                            { category: 'Revenue', current: 124500, previous: 111000, change: 12 },
                                            { category: 'Expenses', current: 45000, previous: 42000, change: 7 },
                                            { category: 'Net Income', current: 79500, previous: 69000, change: 15 }
                                        ].map((item, index) => (_jsxs("tr", { children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: item.category }), _jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: ["$", item.current.toLocaleString()] }), _jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: ["$", item.previous.toLocaleString()] }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("span", { className: `inline-flex items-center text-sm ${item.change > 0 ? 'text-green-600' : 'text-red-600'}`, children: [item.change > 0 ? (_jsx(ArrowUpRight, { className: "h-4 w-4 mr-1" })) : (_jsx(ArrowDownRight, { className: "h-4 w-4 mr-1" })), Math.abs(item.change), "%"] }) })] }, index))) })] }) })] }) })] }));
=======
        return <LoadingSpinner />;
    }
    return (<div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <DollarSign className="h-6 w-6"/>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <p className="text-2xl font-semibold text-gray-900">$124,500</p>
              <p className="mt-1 text-sm text-green-600 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1"/>
                12% increase
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <TrendingUp className="h-6 w-6"/>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Average Invoice</p>
              <p className="text-2xl font-semibold text-gray-900">$2,850</p>
              <p className="mt-1 text-sm text-green-600 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1"/>
                5% increase
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-600">
              <DollarSign className="h-6 w-6"/>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Outstanding</p>
              <p className="text-2xl font-semibold text-gray-900">$15,200</p>
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <ArrowDownRight className="h-4 w-4 mr-1"/>
                2% increase
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Trends</h3>
          <RevenueChart />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Financial Summary</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Current Period
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Previous Period
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
            { category: 'Revenue', current: 124500, previous: 111000, change: 12 },
            { category: 'Expenses', current: 45000, previous: 42000, change: 7 },
            { category: 'Net Income', current: 79500, previous: 69000, change: 15 }
        ].map((item, index) => (<tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${item.current.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${item.previous.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center text-sm ${item.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {item.change > 0 ? (<ArrowUpRight className="h-4 w-4 mr-1"/>) : (<ArrowDownRight className="h-4 w-4 mr-1"/>)}
                        {Math.abs(item.change)}%
                      </span>
                    </td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
