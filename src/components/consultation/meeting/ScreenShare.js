import React, { useEffect, useRef } from 'react';
import { Share2, StopCircle } from 'lucide-react';
import { Button } from '../../ui/Button';
export function ScreenShare({ isSharing, onStartShare, onStopShare }) {
    const videoRef = useRef(null);
    useEffect(() => {
        async function startScreenShare() {
            if (isSharing && videoRef.current) {
                try {
                    const stream = await navigator.mediaDevices.getDisplayMedia({
                        video: true,
                        audio: true
                    });
                    videoRef.current.srcObject = stream;
                    stream.getVideoTracks()[0].onended = () => {
                        onStopShare();
                    };
                }
                catch (error) {
                    console.error('Error sharing screen:', error);
                    onStopShare();
                }
            }
        }
        if (isSharing) {
            startScreenShare();
        }
        return () => {
            if (videoRef.current?.srcObject) {
                const stream = videoRef.current.srcObject;
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [isSharing, onStopShare]);
    return (<>
      {isSharing && (<div className="absolute inset-0">
          <video ref={videoRef} autoPlay playsInline className="w-full h-full object-contain"/>
          <Button variant="outline" size="sm" icon={StopCircle} onClick={onStopShare} className="absolute top-4 right-4 bg-red-600 text-white hover:bg-red-700">
            Stop Sharing
          </Button>
        </div>)}
      {!isSharing && (<Button variant="outline" size="sm" icon={Share2} onClick={onStartShare} className="bg-black bg-opacity-50 text-white hover:bg-opacity-75">
          Share Screen
        </Button>)}
    </>);
}
