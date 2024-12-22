<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
export function RoleForm({ initialData, onSubmit, onCancel }) {
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
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };
<<<<<<< HEAD
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx(Input, { label: "Role Name", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), required: true }), _jsx(Input, { label: "Description", value: formData.description, onChange: (e) => setFormData({ ...formData, description: e.target.value }), multiline: true, rows: 3 }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Permissions" }), _jsx("div", { className: "space-y-2", children: availablePermissions.map((permission) => (_jsxs("label", { className: "flex items-center", children: [_jsx("input", { type: "checkbox", checked: formData.permissions.includes(permission), onChange: (e) => {
                                        const newPermissions = e.target.checked
                                            ? [...formData.permissions, permission]
                                            : formData.permissions.filter((p) => p !== permission);
                                        setFormData({ ...formData, permissions: newPermissions });
                                    }, className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }), _jsx("span", { className: "ml-2 text-sm text-gray-600", children: permission.replace(/:/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) })] }, permission))) })] }), _jsxs("div", { className: "flex justify-end space-x-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: onCancel, children: "Cancel" }), _jsxs(Button, { type: "submit", variant: "primary", children: [initialData ? 'Update' : 'Create', " Role"] })] })] }));
=======
    return (<form onSubmit={handleSubmit} className="space-y-6">
      <Input label="Role Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required/>

      <Input label="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} multiline rows={3}/>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Permissions
        </label>
        <div className="space-y-2">
          {availablePermissions.map((permission) => (<label key={permission} className="flex items-center">
              <input type="checkbox" checked={formData.permissions.includes(permission)} onChange={(e) => {
                const newPermissions = e.target.checked
                    ? [...formData.permissions, permission]
                    : formData.permissions.filter((p) => p !== permission);
                setFormData({ ...formData, permissions: newPermissions });
            }} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
              <span className="ml-2 text-sm text-gray-600">
                {permission.replace(/:/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </span>
            </label>))}
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
    </form>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
