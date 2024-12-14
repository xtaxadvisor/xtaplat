import React from 'react';

interface VideoStreamProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  isSelfView?: boolean;
}

export function VideoStream({ videoRef, isSelfView }: VideoStreamProps) {
  const className = isSelfView
    ? "w-full h-full object-cover"
    : "w-full h-full object-cover absolute inset-0";

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      muted={isSelfView}
      className={className}
    />
  );
}