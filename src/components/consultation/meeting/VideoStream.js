import { jsx as _jsx } from "react/jsx-runtime";
export function VideoStream({ videoRef, isSelfView }) {
    const className = isSelfView
        ? "w-full h-full object-cover"
        : "w-full h-full object-cover absolute inset-0";
    return (_jsx("video", { ref: videoRef, autoPlay: true, playsInline: true, muted: isSelfView, className: className }));
}
