import React from 'react';
import { TrendingUp, BookOpen, Video, FileText, CheckCircle } from 'lucide-react';
import { Button } from '../../ui/Button';

export function AdvancedTaxPlanning() {
  const sections = [
    {
      title: 'Advanced Tax Planning Strategies',
      content: 'Learn sophisticated tax planning techniques for complex financial situations.',
      duration: '45 min',
      type: 'video',
      icon: Video
    },
    {
      title: 'Tax Law and Regulations',
      content: 'Understanding current tax laws and their implications for planning.',
      duration: '60 min',
      type: 'lesson',
      icon: BookOpen
    },
    {
      title: 'Strategic Tax Management',
      content: 'Master advanced tax management and optimization strategies.',
      duration: '50 min',
      type: 'interactive',
      icon: TrendingUp
    },
    {
      title: 'Complex Case Studies',
      content: 'Analyze and solve advanced tax planning scenarios.',
      duration: '90 min',
      type: 'exercise',
      icon: FileText
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Tax Planning</h2>
        <p className="text-gray-600 mb-6">
          Master advanced tax planning strategies and optimize financial outcomes through sophisticated techniques.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-amber-50 rounded-lg p-4">
            <h3 className="font-medium text-amber-900">Course Overview</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center text-amber-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Advanced Planning Strategies
              </li>
              <li className="flex items-center text-amber-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Tax Law Applications
              </li>
              <li className="flex items-center text-amber-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Strategic Management
              </li>
              <li className="flex items-center text-amber-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Complex Scenarios
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-lg p-4">
            <h3 className="font-medium text-orange-900">Learning Outcomes</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center text-orange-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Develop advanced strategies
              </li>
              <li className="flex items-center text-orange-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Apply tax regulations
              </li>
              <li className="flex items-center text-orange-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Optimize tax positions
              </li>
              <li className="flex items-center text-orange-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Handle complex cases
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <section.icon className="h-6 w-6 text-orange-600" />
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