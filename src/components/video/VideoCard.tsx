import React from 'react';
import { Play, Clock, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { VideoClass } from '../../types/video';

interface VideoCardProps {
  video: VideoClass;
}

export function VideoCard({ video }: VideoCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      onClick={() => navigate(`/browse-videos/${video.id}`)}
    >
      <div className="relative aspect-video">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Play className="h-16 w-16 text-white" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{video.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {video.duration}
          </div>
          <div className="text-xl font-bold text-blue-600">
            ${video.price}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {video.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}