import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import type { TeamMember } from '../../types/team';

interface TeamMemberFormProps {
  initialData?: Partial<TeamMember>;
  onSubmit: (data: Omit<TeamMember, 'id'>) => void;
  onCancel: () => void;
}

export function TeamMemberForm({ initialData, onSubmit, onCancel }: TeamMemberFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    role: initialData?.role || '',
    description: initialData?.description || '',
    image: initialData?.image || '',
    email: initialData?.email || '',
    linkedin: initialData?.linkedin || '',
    website: initialData?.website || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <Input
        label="Role/Title"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        required
      />

      <Input
        label="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        multiline
        rows={4}
        required
      />

      <Input
        label="Profile Image URL"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        placeholder="https://example.com/image.jpg"
        required
      />

      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="john@example.com"
      />

      <Input
        label="LinkedIn Profile"
        value={formData.linkedin}
        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
        placeholder="https://linkedin.com/in/username"
      />

      <Input
        label="Website"
        value={formData.website}
        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        placeholder="https://example.com"
      />

      <div className="flex justify-end space-x-3">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {initialData ? 'Update' : 'Add'} Team Member
        </Button>
      </div>
    </form>
  );
}