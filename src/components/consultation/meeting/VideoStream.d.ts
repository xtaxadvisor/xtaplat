import React from 'react';
interface VideoStreamProps {
    videoRef: React.RefObject<HTMLVideoElement>;
    isSelfView?: boolean;
}
export declare function VideoStream({ videoRef, isSelfView }: VideoStreamProps): any;
export {};
