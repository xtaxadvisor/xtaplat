import React, { useState } from 'react';
import { Tag, X } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import type { ThreadCategory } from '../../types/discussion';

interface ThreadFormProps {
  onSubmit: (data: {
    title: string;
    content: string;
    category: ThreadCategory;
    tags: string[];
  }) => void;
  onCancel?: () => void;
  isSubmitting?: boolean;
}

export function ThreadForm({ onSubmit, onCancel, isSubmitting }: ThreadFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'general' as ThreadCategory,
    tags: [] as string[],
    newTag: ''
  });

  const categories: { value: ThreadCategory; label: string }[] = [
    { value: 'buying', label: 'Buying a Home' },
    { value: 'selling', label: 'Selling' },
    { value: 'hoa', label: 'HOA Issues' },
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'insurance', label: 'Insurance' },
    { value: 'contractors', label: 'Contractors' },
    { value: 'tenants', label: 'Tenants' },
    { value: 'legal', label: 'Legal' },
    { value: 'market-trends', label: 'Market Trends' },
    { value: 'general', label: 'General Discussion' }
  ];

  const handleAddTag = () => {
    if (formData.newTag.trim() && !formData.tags.includes(formData.newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, prev.newTag.trim()],
        newTag: ''
      }));
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: formData.title,
      content: formData.content,
      category: formData.category,
      tags: formData.tags
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="What's your question or topic?"
        required
      />

      <Input
        label="Content"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        placeholder="Provide details about your topic..."
        multiline
        rows={6}
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value as ThreadCategory })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {categories.map(category => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Tags</label>
        <div className="mt-1 flex items-center space-x-2">
          <Input
            value={formData.newTag}
            onChange={(e) => setFormData({ ...formData, newTag: e.target.value })}
            placeholder="Add tags..."
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
          />
          <Button
            type="button"
            variant="outline"
            onClick={handleAddTag}
            icon={Tag}
          >
            Add
          </Button>
        </div>
        {formData.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {formData.tags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-1 text-blue-600 hover:text-blue-500"
                >
                  <X className="h-4 w-4" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-3">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create Thread'}
        </Button>
      </div>
    </form>
  );
}