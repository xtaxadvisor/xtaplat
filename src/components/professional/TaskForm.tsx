import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';

interface TaskFormProps {
  onSubmit: (data: {
    title: string;
    description: string;
    dueDate: string;
    priority: 'high' | 'medium' | 'low';
    assignedTo?: string;
  }) => void;
  onCancel: () => void;
}

export function TaskForm({ onSubmit, onCancel }: TaskFormProps) {
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    dueDate: string;
    priority: 'high' | 'medium' | 'low';
    assignedTo?: string;
  }>({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    assignedTo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />

      <Input
        label="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />

      <Input
        type="date"
        label="Due Date"
        value={formData.dueDate}
        onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
        required
      />

      <Select
        label="Priority"
        options={[
          { value: 'low', label: 'Low' },
          { value: 'medium', label: 'Medium' },
          { value: 'high', label: 'High' }
        ]}
        value={formData.priority}
        onChange={(value) => setFormData({ ...formData, priority: value as 'high' | 'medium' | 'low' })}
      />

      <Input
        label="Assigned To"
        value={formData.assignedTo}
        onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
        placeholder="Enter team member name"
      />

      <div className="flex justify-end space-x-3">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Create Task
        </Button>
      </div>
    </form>
  );
}