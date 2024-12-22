import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Search, Filter, MessageSquare, Eye, Tag } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { useInvestmentForum } from '../../hooks/useInvestmentForum';
import { formatTimeAgo } from '../../utils/date';
export default function InvestorForum() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { threads, isLoading } = useInvestmentForum(selectedCategory === 'all' ? undefined : selectedCategory);
    const categories = [
        { value: 'all', label: 'All Categories' },
        { value: 'real-estate', label: 'Real Estate' },
        { value: 'maintenance', label: 'Maintenance' },
        { value: 'market-analysis', label: 'Market Analysis' },
        { value: 'property-management', label: 'Property Management' }
    ];
    const filteredThreads = threads?.filter(thread => thread.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        thread.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        thread.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    if (isLoading) {
        return _jsx(LoadingSpinner, {});
    }
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Investment Forum" }), _jsx(Button, { variant: "primary", onClick: () => { }, icon: MessageSquare, children: "New Discussion" })] }), _jsxs("div", { className: "flex justify-between items-center space-x-4", children: [_jsx("div", { className: "flex-1", children: _jsx(Input, { placeholder: "Search discussions...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), icon: Search }) }), _jsx("div", { className: "w-64", children: _jsx(Select, { options: categories, value: selectedCategory, onChange: setSelectedCategory, icon: Filter }) })] }), _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsx("div", { className: "divide-y divide-gray-200", children: filteredThreads?.map((thread) => (_jsx("div", { className: "p-6 hover:bg-gray-50 transition-colors", children: _jsx("div", { className: "flex justify-between items-start", children: _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 hover:text-blue-600 cursor-pointer", children: thread.title }), _jsx("p", { className: "mt-1 text-gray-600 line-clamp-2", children: thread.content }), _jsxs("div", { className: "mt-2 flex items-center space-x-4 text-sm text-gray-500", children: [_jsxs("span", { className: "flex items-center", children: [_jsx(MessageSquare, { className: "h-4 w-4 mr-1" }), thread.replies, " replies"] }), _jsxs("span", { className: "flex items-center", children: [_jsx(Eye, { className: "h-4 w-4 mr-1" }), thread.views, " views"] }), _jsxs("span", { children: ["Posted ", formatTimeAgo(thread.createdAt)] })] }), _jsx("div", { className: "mt-2 flex flex-wrap gap-2", children: thread.tags.map((tag, index) => (_jsxs("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: [_jsx(Tag, { className: "h-3 w-3 mr-1" }), tag] }, index))) })] }) }) }, thread.id))) }) })] }));
}
