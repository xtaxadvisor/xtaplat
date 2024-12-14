import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';
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

  return (
    <div className="overflow-x-auto">
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
          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{assignment.title}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{assignment.course}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {assignment.dueDate}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  assignment.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {assignment.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Button variant="primary" size="sm">
                  Start Assignment
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}