<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { TrendingUp, Users, DollarSign, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { LineChart } from './charts/LineChart';
import { BarChart } from './charts/BarChart';
export function Analytics() {
<<<<<<< HEAD
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Analytics" }), _jsxs("select", { className: "rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500", children: [_jsx("option", { children: "Last 7 days" }), _jsx("option", { children: "Last 30 days" }), _jsx("option", { children: "Last 3 months" }), _jsx("option", { children: "Last year" })] })] }), _jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [_jsx(Card, { icon: DollarSign, title: "Revenue", value: "$24,500", description: _jsxs("span", { className: "flex items-center text-green-600", children: [_jsx(ArrowUpRight, { className: "h-4 w-4 mr-1" }), "12% increase"] }) }), _jsx(Card, { icon: Users, title: "Active Clients", value: "156", description: _jsxs("span", { className: "flex items-center text-green-600", children: [_jsx(ArrowUpRight, { className: "h-4 w-4 mr-1" }), "8% increase"] }) }), _jsx(Card, { icon: Clock, title: "Avg. Response Time", value: "2.5h", description: _jsxs("span", { className: "flex items-center text-red-600", children: [_jsx(ArrowDownRight, { className: "h-4 w-4 mr-1" }), "5% decrease"] }) }), _jsx(Card, { icon: TrendingUp, title: "Client Satisfaction", value: "96%", description: _jsxs("span", { className: "flex items-center text-green-600", children: [_jsx(ArrowUpRight, { className: "h-4 w-4 mr-1" }), "2% increase"] }) })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Revenue Overview" }), _jsx(LineChart, {})] }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Client Growth" }), _jsx(BarChart, {})] })] })] }));
=======
    return (<div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
          <option>Last year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card icon={DollarSign} title="Revenue" value="$24,500" description={<span className="flex items-center text-green-600">
              <ArrowUpRight className="h-4 w-4 mr-1"/>
              12% increase
            </span>}/>
        <Card icon={Users} title="Active Clients" value="156" description={<span className="flex items-center text-green-600">
              <ArrowUpRight className="h-4 w-4 mr-1"/>
              8% increase
            </span>}/>
        <Card icon={Clock} title="Avg. Response Time" value="2.5h" description={<span className="flex items-center text-red-600">
              <ArrowDownRight className="h-4 w-4 mr-1"/>
              5% decrease
            </span>}/>
        <Card icon={TrendingUp} title="Client Satisfaction" value="96%" description={<span className="flex items-center text-green-600">
              <ArrowUpRight className="h-4 w-4 mr-1"/>
              2% increase
            </span>}/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Overview</h3>
          <LineChart />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Client Growth</h3>
          <BarChart />
        </div>
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
