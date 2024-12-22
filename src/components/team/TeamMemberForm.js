import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
export function TeamMemberForm({ initialData, onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        name: initialData?.name || '',
        role: initialData?.role || '',
        description: initialData?.description || '',
        image: initialData?.image || '',
        email: initialData?.email || '',
        linkedin: initialData?.linkedin || '',
        website: initialData?.website || ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx(Input, { label: "Full Name", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), required: true }), _jsx(Input, { label: "Role/Title", value: formData.role, onChange: (e) => setFormData({ ...formData, role: e.target.value }), required: true }), _jsx(Input, { label: "Description", value: formData.description, onChange: (e) => setFormData({ ...formData, description: e.target.value }), multiline: true, rows: 4, required: true }), _jsx(Input, { label: "Profile Image URL", value: formData.image, onChange: (e) => setFormData({ ...formData, image: e.target.value }), placeholder: "https://example.com/image.jpg", required: true }), _jsx(Input, { label: "Email", type: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), placeholder: "john@example.com" }), _jsx(Input, { label: "LinkedIn Profile", value: formData.linkedin, onChange: (e) => setFormData({ ...formData, linkedin: e.target.value }), placeholder: "https://linkedin.com/in/username" }), _jsx(Input, { label: "Website", value: formData.website, onChange: (e) => setFormData({ ...formData, website: e.target.value }), placeholder: "https://example.com" }), _jsxs("div", { className: "flex justify-end space-x-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: onCancel, children: "Cancel" }), _jsxs(Button, { type: "submit", variant: "primary", children: [initialData ? 'Update' : 'Add', " Team Member"] })] })] }));
}
