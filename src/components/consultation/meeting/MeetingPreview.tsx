import React from 'react';
import { Video, Users } from 'lucide-react';
import { Button } from '../../ui/Button';
import { useVideoStream } from '../../../hooks/useVideoStream';
import { VideoStream } from './VideoStream';

interface MeetingPreviewProps {
  onJoin: () => void;
  onCancel: () => void;
}

export function MeetingPreview({ onJoin, onCancel }: MeetingPreviewProps) {
  const { videoRef, isVideoEnabled, toggleVideo } = useVideoStream();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Video Preview
          </h2>
          
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-6">
            <VideoStream videoRef={videoRef} isSelfView />
            
            {!isVideoEnabled && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <Users className="h-16 w-16 text-gray-400" />
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={toggleVideo}
              icon={Video}
            >
              {isVideoEnabled ? 'Turn Off Camera' : 'Turn On Camera'}
            </Button>

            <div className="space-x-3">
              <Button variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              <Button variant="primary" onClick={onJoin}>
                Join Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}