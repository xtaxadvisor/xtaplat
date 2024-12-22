<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
export function VideoStream({ videoRef, isSelfView }) {
    const className = isSelfView
        ? "w-full h-full object-cover"
        : "w-full h-full object-cover absolute inset-0";
<<<<<<< HEAD
    return (_jsx("video", { ref: videoRef, autoPlay: true, playsInline: true, muted: isSelfView, className: className }));
=======
    return (<video ref={videoRef} autoPlay playsInline muted={isSelfView} className={className}/>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
