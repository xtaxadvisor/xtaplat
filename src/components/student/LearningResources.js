import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Search, Play, BookOpen } from 'lucide-react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { TaxCalculationBasics } from './learning/TaxCalculationBasics';
import { FinancialStatementAnalysis } from './learning/FinancialStatementAnalysis';
import { AdvancedTaxPlanning } from './learning/AdvancedTaxPlanning';
export function LearningResources() {
    const [selectedResource, setSelectedResource] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const resources = [
        {
            id: 'tax-basics',
            title: 'Tax Calculation Basics',
            type: 'course',
            duration: '90 min',
            category: 'tax',
            description: 'Learn the fundamentals of tax calculations through interactive lessons.',
            component: TaxCalculationBasics,
        },
        {
            id: 'financial-analysis',
            title: 'Financial Statement Analysis',
            type: 'course',
            duration: '175 min',
            category: 'finance',
            description: 'Master the art of analyzing financial statements and making informed decisions.',
            component: FinancialStatementAnalysis,
        },
        {
            id: 'advanced-tax',
            title: 'Advanced Tax Planning',
            type: 'course',
            duration: '245 min',
            category: 'tax',
            description: 'Advanced strategies for complex tax planning scenarios.',
            component: AdvancedTaxPlanning,
        },
    ];
    const filteredResources = resources.filter((resource) => {
        const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    if (selectedResource) {
        const resource = resources.find((r) => r.id === selectedResource);
        if (resource) {
            const ResourceComponent = resource.component;
            return (_jsxs("div", { children: [_jsx(Button, { variant: "outline", className: "mb-6", onClick: () => setSelectedResource(null), children: "\u2190 Back to Resources" }), _jsx(ResourceComponent, {})] }));
        }
    }
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Learning Resources" }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(Input, { placeholder: "Search resources...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), icon: Search }), _jsx(Select, { options: [
                                    { value: 'all', label: 'All Categories' },
                                    { value: 'finance', label: 'Finance' },
                                    { value: 'tax', label: 'Tax' },
                                ], value: selectedCategory, onChange: setSelectedCategory })] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredResources.map((resource) => (_jsx("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("div", { className: "p-2 bg-blue-50 rounded-lg", children: _jsx(BookOpen, { className: "h-6 w-6 text-blue-600" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: resource.title }), _jsxs("p", { className: "text-sm text-gray-500", children: [resource.duration, " course"] })] })] }), _jsx("p", { className: "text-gray-600 mb-4", children: resource.description }), _jsx(Button, { variant: "primary", className: "w-full", icon: Play, onClick: () => setSelectedResource(resource.id), children: "Start Learning" })] }) }, resource.id))) })] }));
}
