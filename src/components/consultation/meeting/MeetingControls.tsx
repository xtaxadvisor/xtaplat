import React from 'react';
import { Share2, UserPlus, MessageSquare } from 'lucide-react';
import { Button } from '../../ui/Button';

interface MeetingControlsProps {
  onShare: () => void;
  onInvite: () => void;
  onChat: () => void;
  isChatOpen: boolean;
}

export function MeetingControls({
  onShare,
  onInvite,
  onChat,
  isChatOpen
}: MeetingControlsProps) {
  return (
    <div className="absolute top-4 right-4 flex space-x-2">
      <Button
        variant="outline"
        size="sm"
        icon={Share2}
        onClick={onShare}
        className="bg-black bg-opacity-50 text-white hover:bg-opacity-75"
      >
        Share Screen
      </Button>
      <Button
        variant="outline"
        size="sm"
        icon={UserPlus}
        onClick={onInvite}
        className="bg-black bg-opacity-50 text-white hover:bg-opacity-75"
      >
        Invite
      </Button>
      <Button
        variant="outline"
        size="sm"
        icon={MessageSquare}
        onClick={onChat}
        className={`bg-black bg-opacity-50 text-white hover:bg-opacity-75 ${
          isChatOpen ? 'bg-blue-600 bg-opacity-75' : ''
        }`}
      >
        Chat
      </Button>
    </div>
  );
}