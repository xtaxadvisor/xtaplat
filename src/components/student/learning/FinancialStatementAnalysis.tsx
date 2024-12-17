import React from 'react';
import { BarChart2, BookOpen, Video, FileText, CheckCircle } from 'lucide-react';
import { Button } from '../../ui/Button';

export function FinancialStatementAnalysis() {
  const sections = [
    {
      title: 'Understanding Financial Statements',
      content: 'Learn to read and interpret balance sheets, income statements, and cash flow statements.',
      duration: '30 min',
      type: 'video',
      icon: Video
    },
    {
      title: 'Key Financial Ratios',
      content: 'Master the essential financial ratios used in statement analysis.',
      duration: '45 min',
      type: 'lesson',
      icon: BookOpen
    },
    {
      title: 'Trend Analysis',
      content: 'Learn how to analyze financial trends and make informed decisions.',
      duration: '40 min',
      type: 'interactive',
      icon: BarChart2
    },
    {
      title: 'Case Studies',
      content: 'Apply your knowledge to real-world financial statement analysis scenarios.',
      duration: '60 min',
      type: 'exercise',
      icon: FileText
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Statement Analysis</h2>
        <p className="text-gray-600 mb-6">
          Develop expertise in analyzing financial statements and making data-driven decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="font-medium text-purple-900">Course Overview</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center text-purple-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Financial Statement Components
              </li>
              <li className="flex items-center text-purple-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Ratio Analysis
              </li>
              <li className="flex items-center text-purple-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Trend Analysis
              </li>
              <li className="flex items-center text-purple-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Decision Making
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-medium text-indigo-900">Learning Outcomes</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center text-indigo-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Interpret financial statements
              </li>
              <li className="flex items-center text-indigo-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Calculate key ratios
              </li>
              <li className="flex items-center text-indigo-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Analyze financial trends
              </li>
              <li className="flex items-center text-indigo-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Make informed decisions
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <section.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                  <p className="text-gray-600 mt-1">{section.content}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-500">Duration: {section.duration}</span>
                    <Button variant="primary" size="sm">
                      Start {section.type}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}