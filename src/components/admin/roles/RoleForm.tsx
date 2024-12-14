import React, { useState } from 'react';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { Select } from '../../ui/Select';

interface RoleFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export function RoleForm({ initialData, onSubmit, onCancel }: RoleFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    permissions: initialData?.permissions || []
  });

  const availablePermissions = [
    'view:dashboard',
    'manage:users',
    'manage:roles',
    'manage:content',
    'view:analytics',
    'manage:settings'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Role Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <Input
        label="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        multiline
        rows={3}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Permissions
        </label>
        <div className="space-y-2">
          {availablePermissions.map((permission) => (
            <label key={permission} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.permissions.includes(permission)}
                onChange={(e) => {
                  const newPermissions = e.target.checked
                    ? [...formData.permissions, permission]
                    : formData.permissions.filter((p: string) => p !== permission);
                  setFormData({ ...formData, permissions: newPermissions });
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">
                {permission.replace(/:/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {initialData ? 'Update' : 'Create'} Role
        </Button>
      </div>
    </form>
  );
}