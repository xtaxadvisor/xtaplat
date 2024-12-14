import { useState, useEffect, useRef, useCallback } from 'react';
import { useNotificationStore } from '../lib/store';
import { socketService } from '../services/socket';

export function useVideoStream(consultationId: string) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { addNotification } = useNotificationStore();

  const initializePeerConnection = useCallback(() => {
    const configuration = {
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' }
      ]
    };

    const pc = new RTCPeerConnection(configuration);
    peerConnectionRef.current = pc;

    pc.onicecandidate = event => {
      if (event.candidate) {
        socketService.emit('webrtc:ice-candidate', {
          consultationId,
          candidate: event.candidate
        });
      }
    };

    pc.ontrack = event => {
      if (videoRef.current) {
        videoRef.current.srcObject = event.streams[0];
      }
    };

    return pc;
  }, [consultationId]);

  useEffect(() => {
    async function setupStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        });
        
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        const pc = initializePeerConnection();
        stream.getTracks().forEach(track => {
          if (streamRef.current) {
            pc.addTrack(track, streamRef.current);
          }
        });

        setIsLoading(false);
      } catch (error) {
        console.error('Error accessing media devices:', error);
        addNotification('Failed to access camera and microphone', 'error');
        setIsLoading(false);
      }
    }

    const socket = socketService.connect(consultationId);

    socket?.on('webrtc:offer', async (offer: RTCSessionDescriptionInit) => {
      const pc = peerConnectionRef.current || initializePeerConnection();
      await pc.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      socketService.emit('webrtc:answer', { consultationId, answer });
    });

    socket?.on('webrtc:answer', async (answer: RTCSessionDescriptionInit) => {
      const pc = peerConnectionRef.current;
      if (pc) {
        await pc.setRemoteDescription(new RTCSessionDescription(answer));
      }
    });

    socket?.on('webrtc:ice-candidate', async (candidate: RTCIceCandidateInit) => {
      const pc = peerConnectionRef.current;
      if (pc) {
        await pc.addIceCandidate(new RTCIceCandidate(candidate));
      }
    });

    setupStream();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (peerConnectionRef.current) {
        peerConnectionRef.current.close();
      }
      socketService.disconnect();
    };
  }, [consultationId, initializePeerConnection, addNotification]);

  const toggleMute = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const toggleVideo = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getVideoTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsVideoEnabled(!isVideoEnabled);
    }
  }, [isVideoEnabled]);

  return {
    videoRef,
    isMuted,
    isVideoEnabled,
    isLoading,
    toggleMute,
    toggleVideo
  };
}