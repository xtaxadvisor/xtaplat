import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
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
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx(Input, { label: "Role Name", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), required: true }), _jsx(Input, { label: "Description", value: formData.description, onChange: (e) => setFormData({ ...formData, description: e.target.value }), multiline: true, rows: 3 }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Permissions" }), _jsx("div", { className: "space-y-2", children: availablePermissions.map((permission) => (_jsxs("label", { className: "flex items-center", children: [_jsx("input", { type: "checkbox", checked: formData.permissions.includes(permission), onChange: (e) => {
                                        const newPermissions = e.target.checked
                                            ? [...formData.permissions, permission]
                                            : formData.permissions.filter((p) => p !== permission);
                                        setFormData({ ...formData, permissions: newPermissions });
                                    }, className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }), _jsx("span", { className: "ml-2 text-sm text-gray-600", children: permission.replace(/:/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) })] }, permission))) })] }), _jsxs("div", { className: "flex justify-end space-x-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: onCancel, children: "Cancel" }), _jsxs(Button, { type: "submit", variant: "primary", children: [initialData ? 'Update' : 'Create', " Role"] })] })] }));
}
