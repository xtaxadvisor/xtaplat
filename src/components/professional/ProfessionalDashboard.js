<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Users, FileText, Clock, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '../ui/Card';
export function ProfessionalDashboard() {
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Professional Dashboard" }), _jsx("div", { className: "flex space-x-3", children: _jsxs("select", { className: "rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500", children: [_jsx("option", { children: "This Week" }), _jsx("option", { children: "This Month" }), _jsx("option", { children: "This Quarter" }), _jsx("option", { children: "This Year" })] }) })] }), _jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [_jsx(Card, { icon: Users, title: "Active Clients", value: "48", description: _jsx("span", { className: "flex items-center text-green-600", children: "+3 this month" }) }), _jsx(Card, { icon: FileText, title: "Pending Reviews", value: "12", description: "5 urgent reviews" }), _jsx(Card, { icon: Clock, title: "Average Response Time", value: "2.4h", description: "Within target range" }), _jsx(Card, { icon: TrendingUp, title: "Client Satisfaction", value: "96%", description: "Based on recent feedback" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsx("div", { className: "bg-white rounded-lg shadow", children: _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Upcoming Appointments" }), _jsx("div", { className: "space-y-4", children: [
                                        {
                                            client: 'John Smith',
                                            type: 'Tax Planning',
                                            time: '2:00 PM',
                                            date: 'Today',
                                            status: 'confirmed'
                                        },
                                        {
                                            client: 'Sarah Johnson',
                                            type: 'Investment Review',
                                            time: '10:00 AM',
                                            date: 'Tomorrow',
                                            status: 'pending'
                                        },
                                        {
                                            client: 'Michael Brown',
                                            type: 'Annual Review',
                                            time: '3:30 PM',
                                            date: 'Mar 25',
                                            status: 'confirmed'
                                        }
                                    ].map((appointment, index) => (_jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center", children: _jsx(Users, { className: "h-5 w-5 text-blue-600" }) }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-900", children: appointment.client }), _jsx("p", { className: "text-sm text-gray-500", children: appointment.type })] })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-sm font-medium text-gray-900", children: appointment.time }), _jsx("p", { className: "text-sm text-gray-500", children: appointment.date })] }), _jsx("div", { children: appointment.status === 'confirmed' ? (_jsx(CheckCircle, { className: "h-5 w-5 text-green-500" })) : (_jsx(AlertCircle, { className: "h-5 w-5 text-yellow-500" })) })] }, index))) })] }) }), _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Recent Activities" }), _jsx("div", { className: "space-y-4", children: [
                                        {
                                            action: 'Document Review',
                                            description: 'Reviewed tax returns for Johnson LLC',
                                            time: '1 hour ago',
                                            icon: FileText
                                        },
                                        {
                                            action: 'Client Meeting',
                                            description: 'Completed annual review with Sarah Wilson',
                                            time: '3 hours ago',
                                            icon: Users
                                        },
                                        {
                                            action: 'Task Completion',
                                            description: 'Submitted Q1 projections for review',
                                            time: '5 hours ago',
                                            icon: CheckCircle
                                        }
                                    ].map((activity, index) => (_jsxs("div", { className: "flex items-start space-x-4", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx(activity.icon, { className: "h-6 w-6 text-blue-500" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-sm font-medium text-gray-900", children: activity.action }), _jsx("p", { className: "text-sm text-gray-500", children: activity.description })] }), _jsx("div", { className: "text-sm text-gray-500", children: activity.time })] }, index))) })] }) })] }), _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Client Deadlines" }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Client" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Type" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Deadline" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: [
                                            {
                                                client: 'ABC Corporation',
                                                type: 'Tax Filing',
                                                deadline: 'Mar 31, 2024',
                                                status: 'pending'
                                            },
                                            {
                                                client: 'Johnson LLC',
                                                type: 'Annual Review',
                                                deadline: 'Apr 15, 2024',
                                                status: 'in-progress'
                                            },
                                            {
                                                client: 'Tech Startups Inc',
                                                type: 'Quarterly Report',
                                                deadline: 'Apr 30, 2024',
                                                status: 'pending'
                                            }
                                        ].map((deadline, index) => (_jsxs("tr", { children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("div", { className: "text-sm font-medium text-gray-900", children: deadline.client }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("div", { className: "text-sm text-gray-500", children: deadline.type }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("div", { className: "text-sm text-gray-500", children: deadline.deadline }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${deadline.status === 'pending'
                                                            ? 'bg-yellow-100 text-yellow-800'
                                                            : 'bg-green-100 text-green-800'}`, children: deadline.status }) })] }, index))) })] }) })] }) })] }));
=======
import React from 'react';
import { Users, FileText, Clock, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '../ui/Card';
export function ProfessionalDashboard() {
    return (<div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Professional Dashboard</h1>
        <div className="flex space-x-3">
          <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>This Week</option>
            <option>This Month</option>
            <option>This Quarter</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card icon={Users} title="Active Clients" value="48" description={<span className="flex items-center text-green-600">
              +3 this month
            </span>}/>
        <Card icon={FileText} title="Pending Reviews" value="12" description="5 urgent reviews"/>
        <Card icon={Clock} title="Average Response Time" value="2.4h" description="Within target range"/>
        <Card icon={TrendingUp} title="Client Satisfaction" value="96%" description="Based on recent feedback"/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Appointments</h3>
            <div className="space-y-4">
              {[
            {
                client: 'John Smith',
                type: 'Tax Planning',
                time: '2:00 PM',
                date: 'Today',
                status: 'confirmed'
            },
            {
                client: 'Sarah Johnson',
                type: 'Investment Review',
                time: '10:00 AM',
                date: 'Tomorrow',
                status: 'pending'
            },
            {
                client: 'Michael Brown',
                type: 'Annual Review',
                time: '3:30 PM',
                date: 'Mar 25',
                status: 'confirmed'
            }
        ].map((appointment, index) => (<div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-blue-600"/>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{appointment.client}</p>
                      <p className="text-sm text-gray-500">{appointment.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                    <p className="text-sm text-gray-500">{appointment.date}</p>
                  </div>
                  <div>
                    {appointment.status === 'confirmed' ? (<CheckCircle className="h-5 w-5 text-green-500"/>) : (<AlertCircle className="h-5 w-5 text-yellow-500"/>)}
                  </div>
                </div>))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activities</h3>
            <div className="space-y-4">
              {[
            {
                action: 'Document Review',
                description: 'Reviewed tax returns for Johnson LLC',
                time: '1 hour ago',
                icon: FileText
            },
            {
                action: 'Client Meeting',
                description: 'Completed annual review with Sarah Wilson',
                time: '3 hours ago',
                icon: Users
            },
            {
                action: 'Task Completion',
                description: 'Submitted Q1 projections for review',
                time: '5 hours ago',
                icon: CheckCircle
            }
        ].map((activity, index) => (<div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <activity.icon className="h-6 w-6 text-blue-500"/>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.description}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {activity.time}
                  </div>
                </div>))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Client Deadlines</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deadline
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
            {
                client: 'ABC Corporation',
                type: 'Tax Filing',
                deadline: 'Mar 31, 2024',
                status: 'pending'
            },
            {
                client: 'Johnson LLC',
                type: 'Annual Review',
                deadline: 'Apr 15, 2024',
                status: 'in-progress'
            },
            {
                client: 'Tech Startups Inc',
                type: 'Quarterly Report',
                deadline: 'Apr 30, 2024',
                status: 'pending'
            }
        ].map((deadline, index) => (<tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{deadline.client}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{deadline.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{deadline.deadline}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${deadline.status === 'pending'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-green-100 text-green-800'}`}>
                        {deadline.status}
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
