import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Input } from './Input';
import { Button } from './Button';
export function Form({ fields, onSubmit, submitText = 'Submit', className = '' }) {
    const [formData, setFormData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        fields.forEach(field => {
            if (field.required && !formData[field.name]) {
                newErrors[field.name] = `${field.label} is required`;
            }
        });
        if (Object.keys(newErrors).length === 0) {
            onSubmit(formData);
        }
        else {
            setErrors(newErrors);
        }
    };
    const handleChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: `space-y-4 ${className}`, children: [fields.map(field => (_jsx(Input, { type: field.type || 'text', label: field.label, placeholder: field.placeholder, value: formData[field.name] || '', onChange: e => handleChange(field.name, e.target.value), error: errors[field.name], required: field.required }, field.name))), _jsx(Button, { type: "submit", variant: "primary", className: "w-full", children: submitText })] }));
}
