import React from 'react';
import { Calculator, Book, Video, FileText, CheckCircle } from 'lucide-react';
import { Button } from '../../ui/Button';

export function TaxCalculationBasics() {
  const sections = [
    {
      title: 'Introduction to Tax Calculations',
      content: 'Learn the fundamental concepts of tax calculations and their importance in financial planning.',
      duration: '15 min',
      type: 'video',
      icon: Video
    },
    {
      title: 'Basic Tax Formulas',
      content: 'Understanding essential tax formulas and their practical applications.',
      duration: '20 min',
      type: 'lesson',
      icon: Book
    },
    {
      title: 'Tax Brackets and Rates',
      content: 'Comprehensive guide to understanding tax brackets and how rates are applied.',
      duration: '25 min',
      type: 'interactive',
      icon: Calculator
    },
    {
      title: 'Practice Problems',
      content: 'Apply your knowledge with real-world tax calculation scenarios.',
      duration: '30 min',
      type: 'exercise',
      icon: FileText
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tax Calculation Basics</h2>
        <p className="text-gray-600 mb-6">
          Master the fundamentals of tax calculations with our comprehensive learning materials.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-medium text-blue-900">Course Overview</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center text-blue-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Basic Tax Concepts
              </li>
              <li className="flex items-center text-blue-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Tax Rate Calculations
              </li>
              <li className="flex items-center text-blue-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Deductions and Credits
              </li>
              <li className="flex items-center text-blue-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Practical Applications
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-medium text-green-900">Learning Outcomes</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center text-green-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Calculate basic tax liabilities
              </li>
              <li className="flex items-center text-green-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Understand tax brackets
              </li>
              <li className="flex items-center text-green-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Apply tax formulas
              </li>
              <li className="flex items-center text-green-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Solve real-world scenarios
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <section.icon className="h-6 w-6 text-blue-600" />
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