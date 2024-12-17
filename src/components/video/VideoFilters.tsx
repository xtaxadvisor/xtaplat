import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

interface VideoFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
}

export function VideoFilters({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange
}: VideoFiltersProps) {
  return (
    <div className="flex items-center space-x-4 mb-8">
      <div className="flex-1">
        <Input
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          icon={Search}
        />
      </div>
      <div className="w-64">
        <Select
          options={[
            { value: 'all', label: 'All Categories' },
            { value: 'Tax Planning', label: 'Tax Planning' },
            { value: 'Investment', label: 'Investment' },
            { value: 'Business', label: 'Business' }
          ]}
          value={selectedCategory}
          onChange={onCategoryChange}
          icon={Filter}
        />
      </div>
    </div>
  );
}