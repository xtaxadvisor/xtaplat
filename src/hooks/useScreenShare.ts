import { useState, useCallback } from 'react';

export function useScreenShare() {
  const [isSharing, setIsSharing] = useState(false);

  const startScreenShare = useCallback(async () => {
    try {
      await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
      });
      setIsSharing(true);
    } catch (error) {
      console.error('Error starting screen share:', error);
      setIsSharing(false);
    }
  }, []);

  const stopScreenShare = useCallback(() => {
    setIsSharing(false);
  }, []);

  return {
    isSharing,
    startScreenShare,
    stopScreenShare
  };
}