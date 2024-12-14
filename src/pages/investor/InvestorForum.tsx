import React, { useState } from 'react';
import { Search, Filter, MessageSquare, Eye, Tag } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { useInvestmentForum } from '../../hooks/useInvestmentForum';
import { formatTimeAgo } from '../../utils/date';

export default function InvestorForum() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { threads, isLoading } = useInvestmentForum(
    selectedCategory === 'all' ? undefined : selectedCategory
  );

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'market-analysis', label: 'Market Analysis' },
    { value: 'property-management', label: 'Property Management' }
  ];

  const filteredThreads = threads?.filter(thread =>
    thread.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    thread.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    thread.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Investment Forum</h1>
        <Button variant="primary" onClick={() => {}} icon={MessageSquare}>
          New Discussion
        </Button>
      </div>

      <div className="flex justify-between items-center space-x-4">
        <div className="flex-1">
          <Input
            placeholder="Search discussions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={Search}
          />
        </div>
        <div className="w-64">
          <Select
            options={categories}
            value={selectedCategory}
            onChange={setSelectedCategory}
            icon={Filter}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="divide-y divide-gray-200">
          {filteredThreads?.map((thread) => (
            <div key={thread.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                    {thread.title}
                  </h3>
                  <p className="mt-1 text-gray-600 line-clamp-2">{thread.content}</p>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {thread.replies} replies
                    </span>
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {thread.views} views
                    </span>
                    <span>Posted {formatTimeAgo(thread.createdAt)}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {thread.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
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