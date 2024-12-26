import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Search, Filter } from 'lucide-react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
export function VideoFilters({ searchTerm, onSearchChange, selectedCategory, onCategoryChange }) {
    return (_jsxs("div", { className: "flex items-center space-x-4 mb-8", children: [_jsx("div", { className: "flex-1", children: _jsx(Input, { placeholder: "Search videos...", value: searchTerm, onChange: (e) => onSearchChange(e.target.value), icon: Search }) }), _jsx("div", { className: "w-64", children: _jsx(Select, { options: [
                        { value: 'all', label: 'All Categories' },
                        { value: 'Tax Planning', label: 'Tax Planning' },
                        { value: 'Investment', label: 'Investment' },
                        { value: 'Business', label: 'Business' }
                    ], value: selectedCategory, onChange: onCategoryChange, icon: Filter }) })] }));
}
