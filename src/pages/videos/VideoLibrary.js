<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Search, Play, Clock, DollarSign, Tag } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Select } from '../../components/ui/Select';
import { useNotificationStore } from '../../lib/store';
export default function VideoLibrary() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { addNotification } = useNotificationStore();
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
        }
    ];
    const filteredVideos = sampleVideos.filter(video => {
        const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    const handlePurchase = (videoId) => {
<<<<<<< HEAD
        addNotification('Video purchase feature coming soon!', 'info');
    };
    return (_jsx("div", { className: "min-h-screen bg-gray-50 py-12", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex justify-between items-center mb-8", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Video Library" }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("input", { type: "text", placeholder: "Search videos...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" })] }), _jsx(Select, { options: [
                                        { value: 'all', label: 'All Categories' },
                                        { value: 'Tax Planning', label: 'Tax Planning' },
                                        { value: 'Investment', label: 'Investment' }
                                    ], value: selectedCategory, onChange: setSelectedCategory })] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredVideos.map((video) => (_jsxs("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden", children: [_jsxs("div", { className: "relative aspect-video", children: [_jsx("img", { src: video.thumbnail, alt: video.title, className: "w-full h-full object-cover" }), _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity", children: _jsx(Play, { className: "h-16 w-16 text-white" }) })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: video.title }), _jsx("p", { className: "text-gray-600 mb-4", children: video.description }), _jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("div", { className: "flex items-center text-gray-500", children: [_jsx(Clock, { className: "h-5 w-5 mr-1" }), video.duration] }), _jsxs("div", { className: "text-xl font-bold text-blue-600", children: ["$", video.price] })] }), _jsxs("div", { className: "mb-4", children: [_jsxs("p", { className: "text-sm text-gray-500 mb-2", children: ["Instructor: ", video.instructor] }), _jsx("div", { className: "flex flex-wrap gap-2", children: video.tags.map((tag, index) => (_jsxs("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: [_jsx(Tag, { className: "h-3 w-3 mr-1" }), tag] }, index))) })] }), _jsx(Button, { variant: "primary", className: "w-full", onClick: () => handlePurchase(video.id), icon: DollarSign, children: "Purchase Now" })] })] }, video.id))) })] }) }));
=======
        addNotification(`Video with ID ${videoId} purchase feature coming soon!`, 'info');
    };
    return (<div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
  <h1 className="text-3xl font-bold text-gray-900">Video Library</h1>
  <div className="flex items-center space-x-4">
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"/>
      <input type="text" placeholder="Search videos..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
    </div>
    <Select options={[
            { value: 'all', label: 'All Categories' },
            { value: 'Tax Planning', label: 'Tax Planning' },
            { value: 'Investment', label: 'Investment' }
        ]} value={selectedCategory} onChange={setSelectedCategory}/>
  </div>
    </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (<div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative aspect-video">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="h-16 w-16 text-white"/>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-5 w-5 mr-1"/>
                    {video.duration}
                  </div>
                  <div className="text-xl font-bold text-blue-600">
                    ${video.price}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Instructor: {video.instructor}</p>
                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag, index) => (<span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <Tag className="h-3 w-3 mr-1"/>
                        {tag}
                      </span>))}
                  </div>
                </div>

                <Button variant="primary" className="w-full" onClick={() => handlePurchase(video.id)} icon={DollarSign}>
                  Purchase Now
                </Button>
              </div>
            </div>))}
        </div>
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
