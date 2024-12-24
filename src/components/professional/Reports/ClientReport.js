<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Users, ArrowUpRight } from 'lucide-react';
import { ClientDistributionChart } from '../charts/ClientDistributionChart';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
export function ClientReport({ dateRange, isLoading }) {
    if (isLoading) {
<<<<<<< HEAD
        return _jsx(LoadingSpinner, {});
    }
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsx("div", { className: "bg-white p-6 rounded-lg shadow", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "p-3 rounded-full bg-blue-100 text-blue-600", children: _jsx(Users, { className: "h-6 w-6" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "Total Clients" }), _jsx("p", { className: "text-2xl font-semibold text-gray-900", children: "156" }), _jsxs("p", { className: "mt-1 text-sm text-green-600 flex items-center", children: [_jsx(ArrowUpRight, { className: "h-4 w-4 mr-1" }), "8 new this period"] })] })] }) }), _jsx("div", { className: "bg-white p-6 rounded-lg shadow", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "p-3 rounded-full bg-green-100 text-green-600", children: _jsx(Users, { className: "h-6 w-6" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "Active Projects" }), _jsx("p", { className: "text-2xl font-semibold text-gray-900", children: "32" }), _jsxs("p", { className: "mt-1 text-sm text-green-600 flex items-center", children: [_jsx(ArrowUpRight, { className: "h-4 w-4 mr-1" }), "3 new this period"] })] })] }) }), _jsx("div", { className: "bg-white p-6 rounded-lg shadow", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "p-3 rounded-full bg-yellow-100 text-yellow-600", children: _jsx(Users, { className: "h-6 w-6" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "Client Retention" }), _jsx("p", { className: "text-2xl font-semibold text-gray-900", children: "95%" }), _jsxs("p", { className: "mt-1 text-sm text-green-600 flex items-center", children: [_jsx(ArrowUpRight, { className: "h-4 w-4 mr-1" }), "2% increase"] })] })] }) })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsx("div", { className: "bg-white rounded-lg shadow", children: _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Client Distribution" }), _jsx(ClientDistributionChart, {})] }) }), _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Client Engagement" }), _jsx("div", { className: "space-y-4", children: [
                                        { metric: 'Meeting Attendance', value: 92, trend: '+3%' },
                                        { metric: 'Document Submission', value: 88, trend: '+5%' },
                                        { metric: 'Response Rate', value: 95, trend: '+2%' },
                                        { metric: 'Satisfaction Score', value: 4.8, trend: '+0.2' }
                                    ].map((item, index) => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm text-gray-600", children: item.metric }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: "w-32 bg-gray-200 rounded-full h-2", children: _jsx("div", { className: "bg-blue-600 h-2 rounded-full", style: { width: `${(item.value / 5) * 100}%` } }) }), _jsx("span", { className: "text-sm font-medium text-gray-900", children: item.value }), _jsx("span", { className: "text-sm text-green-600", children: item.trend })] })] }, index))) })] }) })] })] }));
=======
        return <LoadingSpinner />;
    }
    return (<div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <Users className="h-6 w-6"/>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Clients</p>
              <p className="text-2xl font-semibold text-gray-900">156</p>
              <p className="mt-1 text-sm text-green-600 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1"/>
                8 new this period
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <Users className="h-6 w-6"/>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Projects</p>
              <p className="text-2xl font-semibold text-gray-900">32</p>
              <p className="mt-1 text-sm text-green-600 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1"/>
                3 new this period
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <Users className="h-6 w-6"/>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Client Retention</p>
              <p className="text-2xl font-semibold text-gray-900">95%</p>
              <p className="mt-1 text-sm text-green-600 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1"/>
                2% increase
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Client Distribution</h3>
            <ClientDistributionChart />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Client Engagement</h3>
            <div className="space-y-4">
              {[
            { metric: 'Meeting Attendance', value: 92, trend: '+3%' },
            { metric: 'Document Submission', value: 88, trend: '+5%' },
            { metric: 'Response Rate', value: 95, trend: '+2%' },
            { metric: 'Satisfaction Score', value: 4.8, trend: '+0.2' }
        ].map((item, index) => (<div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{item.metric}</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(item.value / 5) * 100}%` }}/>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {item.value}
                    </span>
                    <span className="text-sm text-green-600">{item.trend}</span>
                  </div>
                </div>))}
            </div>
          </div>
        </div>
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
