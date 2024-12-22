import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Search, Filter, Play, Clock, DollarSign, Tag } from 'lucide-react';
import { Button } from '../ui/Button';
const sampleVideos = [
    {
        id: '1',
        title: 'Tax Planning Strategies for Small Businesses',
        description: 'Learn essential tax planning strategies to optimize your business finances.',
        price: 199.99,
        duration: '2h 30m',
        thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500',
        category: 'Tax Planning',
        tags: ['Small Business', 'Tax Strategy', 'Finance'],
        instructor: 'Gilberto Domingues'
    },
    {
        id: '2',
        title: 'Investment Portfolio Management',
        description: 'Master the art of building and managing a successful investment portfolio.',
        price: 249.99,
        duration: '3h 15m',
        thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=500',
        category: 'Investment',
        tags: ['Portfolio Management', 'Investment Strategy'],
        instructor: 'Michael Chen'
    },
    {
        id: '3',
        title: 'International Tax Compliance',
        description: 'Navigate the complexities of international tax regulations and compliance.',
        price: 299.99,
        duration: '4h',
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500',
        category: 'Tax Planning',
        tags: ['International Tax', 'Compliance', 'Global Business'],
        instructor: 'Dr. Sarah Martinez'
    },
    {
        id: '4',
        title: 'Business Valuation Fundamentals',
        description: 'Learn how to accurately value businesses using proven methodologies.',
        price: 199.99,
        duration: '2h 45m',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500',
        category: 'Business',
        tags: ['Valuation', 'Business Analysis'],
        instructor: 'Michael Chen'
    },
    {
        id: '5',
        title: 'Advanced Tax Planning for High Net Worth Individuals',
        description: 'Specialized tax strategies for high net worth individuals and families.',
        price: 349.99,
        duration: '3h 30m',
        thumbnail: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=500',
        category: 'Tax Planning',
        tags: ['High Net Worth', 'Tax Strategy', 'Wealth Management'],
        instructor: 'Gilberto Domingues'
    }
];
export function VideoLibrary() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const categories = ['all', 'Tax Planning', 'Investment', 'Business'];
    const filteredVideos = sampleVideos.filter(video => {
        const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    const handleBuyNow = (videoId) => {
        // Implement payment gateway integration
        console.log('Purchasing video:', videoId);
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Business Video Classes" }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("input", { type: "text", placeholder: "Search videos...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Filter, { className: "h-5 w-5 text-gray-400" }), _jsx("select", { value: selectedCategory, onChange: (e) => setSelectedCategory(e.target.value), className: "border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500", children: categories.map(category => (_jsx("option", { value: category, children: category === 'all' ? 'All Categories' : category }, category))) })] })] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredVideos.map(video => (_jsxs("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow", children: [_jsxs("div", { className: "relative aspect-w-16 aspect-h-9", children: [_jsx("img", { src: video.thumbnail, alt: video.title, className: "w-full h-full object-cover" }), _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity", children: _jsx(Play, { className: "h-16 w-16 text-white" }) })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: video.title }), _jsx("p", { className: "text-gray-600 mb-4", children: video.description }), _jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("div", { className: "flex items-center text-gray-500", children: [_jsx(Clock, { className: "h-5 w-5 mr-1" }), video.duration] }), _jsxs("div", { className: "text-xl font-bold text-blue-600", children: ["$", video.price] })] }), _jsxs("div", { className: "mb-4", children: [_jsxs("p", { className: "text-sm text-gray-500 mb-2", children: ["Instructor: ", video.instructor] }), _jsx("div", { className: "flex flex-wrap gap-2", children: video.tags.map((tag, index) => (_jsxs("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: [_jsx(Tag, { className: "h-3 w-3 mr-1" }), tag] }, index))) })] }), _jsx(Button, { variant: "primary", className: "w-full", onClick: () => handleBuyNow(video.id), icon: DollarSign, children: "Buy Now" })] })] }, video.id))) })] }));
}
