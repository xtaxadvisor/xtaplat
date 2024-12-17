import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, Clock, Tag, User } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { VideoAnalysis } from '../../components/ai/VideoAnalysis';
import { videoClasses } from '../../data/videoData';
import { useNotificationStore } from '../../lib/store';

export default function VideoDetail() {
  const { videoId } = useParams();
  const { addNotification } = useNotificationStore();
  
  const video = videoClasses.find(v => v.id === videoId);

  if (!video) {
    return <div>Video not found</div>;
  }

  const handlePurchase = () => {
    addNotification('Video purchase feature coming soon!', 'info');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative aspect-video">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <Play className="h-20 w-20 text-white" />
            </div>
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{video.title}</h1>
            
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center text-gray-500">
                <Clock className="h-5 w-5 mr-1" />
                {video.duration}
              </div>
              <div className="flex items-center text-gray-500">
                <User className="h-5 w-5 mr-1" />
                {video.instructor}
              </div>
              <div className="text-2xl font-bold text-blue-600">
                ${video.price}
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">{video.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {video.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  <Tag className="h-4 w-4 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            <Button
              variant="primary"
              className="w-full mb-8"
              onClick={handlePurchase}
              icon={Play}
            >
              Purchase Course
            </Button>

            <VideoAnalysis video={video} />
          </div>
        </div>
      </div>
    </div>
  );
}