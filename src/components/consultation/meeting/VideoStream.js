import React from 'react';
export function VideoStream({ videoRef, isSelfView }) {
    const className = isSelfView
        ? "w-full h-full object-cover"
        : "w-full h-full object-cover absolute inset-0";
    return (<video ref={videoRef} autoPlay playsInline muted={isSelfView} className={className}/>);
}
