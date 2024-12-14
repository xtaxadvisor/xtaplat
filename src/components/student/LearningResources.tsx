import React, { useState } from 'react';
import { Search, Filter, Play, Download, BookOpen } from 'lucide-react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

export function LearningResources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      id: '1',
      title: 'Introduction to Financial Planning',
      type: 'video',
      duration: '45 min',
      category: 'finance',
      description: 'Learn the basics of personal financial planning and management.'
    },
    {
      id: '2',
      title: 'Tax Planning Guide',
      type: 'pdf',
      pages: 25,
      category: 'tax',
      description: 'Comprehensive guide to understanding tax planning strategies.'
    },
    {
      id: '3',
      title: 'Investment Strategies Workshop',
      type: 'video',
      duration: '60 min',
      category: 'investment',
      description: 'Advanced workshop on investment strategies and portfolio management.'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Learning Resources</h1>
        <div className="flex items-center space-x-4">
          <Input
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={Search}
          />
          <Select
            options={[
              { value: 'all', label: 'All Categories' },
              { value: 'finance', label: 'Finance' },
              { value: 'tax', label: 'Tax' },
              { value: 'investment', label: 'Investment' }
            ]}
            value={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  {resource.type === 'video' ? (
                    <Play className="h-6 w-6 text-blue-600" />
                  ) : (
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
                  <p className="text-sm text-gray-500">
                    {resource.type === 'video' ? `${resource.duration} video` : `${resource.pages} pages`}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{resource.description}</p>

              <Button
                variant="primary"
                className="w-full"
                icon={resource.type === 'video' ? Play : Download}
              >
                {resource.type === 'video' ? 'Watch Now' : 'Download'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}