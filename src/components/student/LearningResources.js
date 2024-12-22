import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Search, Play, Download, BookOpen } from 'lucide-react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
export function LearningResources() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const resources = [
        {
            id: '1',
            title: 'Introduction to Financial Planning',
            type: 'video',
            duration: '45 min',
            category: 'finance',
            description: 'Learn the basics of personal financial planning and management.'
        },
        {
            id: '2',
            title: 'Tax Planning Guide',
            type: 'pdf',
            pages: 25,
            category: 'tax',
            description: 'Comprehensive guide to understanding tax planning strategies.'
        },
        {
            id: '3',
            title: 'Investment Strategies Workshop',
            type: 'video',
            duration: '60 min',
            category: 'investment',
            description: 'Advanced workshop on investment strategies and portfolio management.'
        }
    ];
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Learning Resources" }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(Input, { placeholder: "Search resources...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), icon: Search }), _jsx(Select, { options: [
                                    { value: 'all', label: 'All Categories' },
                                    { value: 'finance', label: 'Finance' },
                                    { value: 'tax', label: 'Tax' },
                                    { value: 'investment', label: 'Investment' }
                                ], value: selectedCategory, onChange: setSelectedCategory })] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: resources.map((resource) => (_jsx("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("div", { className: "p-2 bg-blue-50 rounded-lg", children: resource.type === 'video' ? (_jsx(Play, { className: "h-6 w-6 text-blue-600" })) : (_jsx(BookOpen, { className: "h-6 w-6 text-blue-600" })) }), _jsxs("div", { className: "ml-4", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: resource.title }), _jsx("p", { className: "text-sm text-gray-500", children: resource.type === 'video' ? `${resource.duration} video` : `${resource.pages} pages` })] })] }), _jsx("p", { className: "text-gray-600 mb-4", children: resource.description }), _jsx(Button, { variant: "primary", className: "w-full", icon: resource.type === 'video' ? Play : Download, children: resource.type === 'video' ? 'Watch Now' : 'Download' })] }) }, resource.id))) })] }));
}
