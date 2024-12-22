<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
=======
import React, { useEffect, useRef } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
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
<<<<<<< HEAD
    return (_jsxs(_Fragment, { children: [isSharing && (_jsxs("div", { className: "absolute inset-0", children: [_jsx("video", { ref: videoRef, autoPlay: true, playsInline: true, className: "w-full h-full object-contain" }), _jsx(Button, { variant: "outline", size: "sm", icon: StopCircle, onClick: onStopShare, className: "absolute top-4 right-4 bg-red-600 text-white hover:bg-red-700", children: "Stop Sharing" })] })), !isSharing && (_jsx(Button, { variant: "outline", size: "sm", icon: Share2, onClick: onStartShare, className: "bg-black bg-opacity-50 text-white hover:bg-opacity-75", children: "Share Screen" }))] }));
=======
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
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
