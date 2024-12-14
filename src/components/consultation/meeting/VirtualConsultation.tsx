import React, { useState, useEffect } from 'react';
import { useVideoStream } from '../../../hooks/useVideoStream';
import { useChat } from '../../../hooks/useChat';
import { useScreenShare } from '../../../hooks/useScreenShare';
import { VideoStream } from './VideoStream';
import { VideoControls } from './VideoControls';
import { ChatPanel } from './ChatPanel';
import { ScreenShare } from './ScreenShare';
import { MeetingControls } from './MeetingControls';
import { useConsultation } from '../../../hooks/useConsultation';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { useNotificationStore } from '../../../lib/store';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

interface VirtualConsultationProps {
  consultationId: string;
  onEnd: () => void;
}

export function VirtualConsultation({ consultationId, onEnd }: VirtualConsultationProps) {
  const { consultation, isLoading: consultationLoading, updateConsultation } = useConsultation(consultationId);
  const { videoRef, isMuted, isVideoEnabled, isLoading: streamLoading, toggleMute, toggleVideo } = useVideoStream(consultationId);
  const { messages, sendMessage, isLoading: chatLoading, isSending } = useChat(consultationId);
  const { isSharing, startScreenShare, stopScreenShare } = useScreenShare();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { addNotification } = useNotificationStore();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // Check access rights
    if (consultation && user) {
      const hasAccess = 
        user.role === 'professional' || 
        consultation.clientId === user.id ||
        consultation.professionalId === user.id;

      if (!hasAccess) {
        addNotification('You do not have access to this consultation', 'error');
        navigate('/dashboard');
        return;
      }
    }

    // Update consultation status when joining
    if (consultation && consultation.status === 'scheduled') {
      updateConsultation({
        id: consultationId,
        status: 'in-progress'
      }).catch(() => {
        addNotification('Failed to update consultation status', 'error');
      });
    }

    // Handle beforeunload to update status when leaving
    const handleBeforeUnload = () => {
      if (consultation?.status === 'in-progress') {
        updateConsultation({
          id: consultationId,
          status: 'completed'
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      handleBeforeUnload();
    };
  }, [consultation, consultationId, updateConsultation, addNotification, navigate, user]);

  if (consultationLoading || streamLoading || !consultation) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <LoadingSpinner />
      </div>
    );
  }

  const handleEndMeeting = async () => {
    try {
      await updateConsultation({
        id: consultationId,
        status: 'completed'
      });
      onEnd();
    } catch (error) {
      addNotification('Failed to end meeting', 'error');
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="flex-1 relative">
        {/* Main video stream */}
        <VideoStream videoRef={videoRef} />
        
        {/* Screen share overlay */}
        <ScreenShare
          isSharing={isSharing}
          onStartShare={startScreenShare}
          onStopShare={stopScreenShare}
        />
        
        {/* Self view */}
        <div className="absolute bottom-4 right-4 w-48 h-36 bg-black rounded-lg overflow-hidden">
          <VideoStream videoRef={videoRef} isSelfView />
        </div>

        {/* Meeting info overlay */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 rounded-lg p-4 text-white">
          <h2 className="text-lg font-medium">
            {consultation.type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h2>
          <p className="text-sm opacity-75">
            {new Date(consultation.startTime).toLocaleTimeString()} - 
            {new Date(consultation.endTime).toLocaleTimeString()}
          </p>
        </div>

        {/* Meeting controls */}
        <MeetingControls
          onShare={startScreenShare}
          onInvite={() => {}}
          onChat={() => setIsChatOpen(!isChatOpen)}
          isChatOpen={isChatOpen}
        />

        {/* Video controls */}
        <VideoControls
          isMuted={isMuted}
          isVideoEnabled={isVideoEnabled}
          onToggleMute={toggleMute}
          onToggleVideo={toggleVideo}
          onEndCall={handleEndMeeting}
        />
      </div>

      {/* Chat panel */}
      {isChatOpen && (
        <div className="w-80 border-l border-gray-800">
          <ChatPanel
            messages={messages}
            onSendMessage={sendMessage}
            isLoading={chatLoading}
            isSending={isSending}
          />
        </div>
      )}
    </div>
  );
}