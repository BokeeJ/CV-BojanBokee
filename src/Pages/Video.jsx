
import React, { useEffect, useRef } from 'react';

const VideoComponent = () => {
    return (
        <div className=" bg-gray-800 w-full p-5">
            <video
                className="rounded-lg shadow-lg"
                width="fullscreen"
                height="360"
                loop
                muted
                autoPlay
                playsInline
                controls={false}
            >
                <source src="/video.webm" type="video/mp4" />

            </video>
        </div>
    );
}

export default VideoComponent;
