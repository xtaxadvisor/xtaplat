<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Clock } from 'lucide-react';
import { Button } from '../../ui/Button';
export function UpcomingAssignments() {
    const assignments = [
        {
            id: 1,
            title: 'Financial Analysis Project',
            dueDate: '2024-03-25',
            course: 'Advanced Financial Planning',
            status: 'pending'
        },
        {
            id: 2,
            title: 'Tax Case Study',
            dueDate: '2024-03-28',
            course: 'Tax Planning Fundamentals',
            status: 'in-progress'
        },
        {
            id: 3,
            title: 'Investment Portfolio Review',
            dueDate: '2024-04-01',
            course: 'Investment Strategies',
            status: 'pending'
        }
    ];
<<<<<<< HEAD
    return (_jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Assignment" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Course" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Due Date" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }), _jsx("th", { className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Action" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: assignments.map((assignment) => (_jsxs("tr", { children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("div", { className: "text-sm font-medium text-gray-900", children: assignment.title }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("div", { className: "text-sm text-gray-500", children: assignment.course }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), assignment.dueDate] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${assignment.status === 'pending'
                                        ? 'bg-yellow-100 text-yellow-800'
                                        : 'bg-blue-100 text-blue-800'}`, children: assignment.status }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: _jsx(Button, { variant: "primary", size: "sm", children: "Start Assignment" }) })] }, assignment.id))) })] }) }));
=======
    return (<div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Assignment
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Course
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Due Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {assignments.map((assignment) => (<tr key={assignment.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{assignment.title}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{assignment.course}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1"/>
                  {assignment.dueDate}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${assignment.status === 'pending'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-blue-100 text-blue-800'}`}>
                  {assignment.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Button variant="primary" size="sm">
                  Start Assignment
                </Button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
