import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Tag, X } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
export function ThreadForm({ onSubmit, onCancel, isSubmitting }) {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: 'general',
        tags: [],
        newTag: ''
    });
    const categories = [
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
    const handleRemoveTag = (tagToRemove) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            title: formData.title,
            content: formData.content,
            category: formData.category,
            tags: formData.tags
        });
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx(Input, { label: "Title", value: formData.title, onChange: (e) => setFormData({ ...formData, title: e.target.value }), placeholder: "What's your question or topic?", required: true }), _jsx(Input, { label: "Content", value: formData.content, onChange: (e) => setFormData({ ...formData, content: e.target.value }), placeholder: "Provide details about your topic...", multiline: true, rows: 6, required: true }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Category" }), _jsx("select", { value: formData.category, onChange: (e) => setFormData({ ...formData, category: e.target.value }), className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500", children: categories.map(category => (_jsx("option", { value: category.value, children: category.label }, category.value))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Tags" }), _jsxs("div", { className: "mt-1 flex items-center space-x-2", children: [_jsx(Input, { value: formData.newTag, onChange: (e) => setFormData({ ...formData, newTag: e.target.value }), placeholder: "Add tags...", onKeyPress: (e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag()) }), _jsx(Button, { type: "button", variant: "outline", onClick: handleAddTag, icon: Tag, children: "Add" })] }), formData.tags.length > 0 && (_jsx("div", { className: "mt-2 flex flex-wrap gap-2", children: formData.tags.map(tag => (_jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800", children: [tag, _jsx("button", { type: "button", onClick: () => handleRemoveTag(tag), className: "ml-1 text-blue-600 hover:text-blue-500", children: _jsx(X, { className: "h-4 w-4" }) })] }, tag))) }))] }), _jsxs("div", { className: "flex justify-end space-x-3", children: [onCancel && (_jsx(Button, { type: "button", variant: "outline", onClick: onCancel, children: "Cancel" })), _jsx(Button, { type: "submit", variant: "primary", disabled: isSubmitting, children: isSubmitting ? 'Creating...' : 'Create Thread' })] })] }));
}
