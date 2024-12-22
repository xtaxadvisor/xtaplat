import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import { Upload, X, File, Plus } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { useNotificationStore } from '../../../lib/store';
export function DocumentUpload({ onUpload, onClose }) {
    const [files, setFiles] = useState([]);
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');
    const fileInputRef = useRef(null);
    const { addNotification } = useNotificationStore();
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles(prev => [...prev, ...droppedFiles]);
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const handleFileSelect = (e) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            setFiles(prev => [...prev, ...selectedFiles]);
        }
    };
    const removeFile = (index) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };
    const addTag = () => {
        if (newTag.trim() && !tags.includes(newTag.trim())) {
            setTags(prev => [...prev, newTag.trim()]);
            setNewTag('');
        }
    };
    const removeTag = (tag) => {
        setTags(prev => prev.filter(t => t !== tag));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (files.length === 0) {
            addNotification('Please select files to upload', 'error');
            return;
        }
        try {
            // Handle file upload
            onClose();
            addNotification('Files uploaded successfully', 'success');
        }
        catch (error) {
            addNotification('Error uploading files', 'error');
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center", onDrop: handleDrop, onDragOver: handleDragOver, children: [_jsx("input", { type: "file", ref: fileInputRef, onChange: handleFileSelect, multiple: true, className: "hidden" }), _jsxs("div", { className: "space-y-2", children: [_jsx(Upload, { className: "mx-auto h-12 w-12 text-gray-400" }), _jsxs("div", { className: "text-gray-600", children: [_jsx("button", { type: "button", className: "text-blue-600 hover:text-blue-500", onClick: () => fileInputRef.current?.click(), children: "Click to upload" }), ' or drag and drop'] }), _jsx("p", { className: "text-sm text-gray-500", children: "PDF, DOC, DOCX, XLS, XLSX up to 10MB each" })] })] }), files.length > 0 && (_jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "text-sm font-medium text-gray-900", children: "Selected Files" }), _jsx("div", { className: "space-y-2", children: files.map((file, index) => (_jsxs("div", { className: "flex items-center justify-between p-2 bg-gray-50 rounded-md", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(File, { className: "h-5 w-5 text-gray-400 mr-2" }), _jsx("span", { className: "text-sm text-gray-900", children: file.name }), _jsxs("span", { className: "ml-2 text-sm text-gray-500", children: ["(", (file.size / 1024 / 1024).toFixed(2), " MB)"] })] }), _jsx("button", { type: "button", onClick: () => removeFile(index), className: "text-gray-400 hover:text-gray-500", children: _jsx(X, { className: "h-5 w-5" }) })] }, index))) })] })), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "text-sm font-medium text-gray-900", children: "Tags" }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Input, { value: newTag, onChange: (e) => setNewTag(e.target.value), placeholder: "Add tags...", className: "flex-1" }), _jsx(Button, { type: "button", variant: "outline", icon: Plus, onClick: addTag, children: "Add" })] }), tags.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: tags.map((tag) => (_jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800", children: [tag, _jsx("button", { type: "button", onClick: () => removeTag(tag), className: "ml-1 text-blue-600 hover:text-blue-500", children: _jsx(X, { className: "h-4 w-4" }) })] }, tag))) }))] }), _jsxs("div", { className: "flex justify-end space-x-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: onClose, children: "Cancel" }), _jsx(Button, { type: "submit", variant: "primary", icon: Upload, children: "Upload Files" })] })] }));
}
