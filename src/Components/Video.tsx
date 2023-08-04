import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface VideoProps {
  progress: number;
  videoSrc: string;
}

const Video: React.FC<VideoProps> = ({ progress, videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<number>(0);

    const video = videoRef.current;
    const text = textRef.current;

    // Sync video playback with the progress (scroll position)
    if (video) {
      const currentTime = progress * duration;
      video.currentTime = currentTime;
    }

    // Show text overlay for 5 seconds when video starts
    if (text) {
      if (progress > 0.2 && progress < 7 / duration) {
        gsap.to(text, { autoAlpha: 1, duration: 0.5, fontSize: '3em' },);
      } else {
        gsap.to(text, { autoAlpha: 0, duration: 0.5, fontSize: '0.3em' });
      }
    }
  // Calculate video duration on metadata load
  const handleVideoLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration);
    }
  };

  return (
    <div style={{width: '100%', position: 'relative' }}>
      {/* Text Overlay */}
      <div
        ref={textRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '0.3em',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          pointerEvents: 'none',
          opacity: 0,
        }}
      >
        <h1>JAY L</h1>
      </div>

      {/* Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        width="100%"
        height="100%"
        preload="metadata"
        muted
        onLoadedMetadata={handleVideoLoadedMetadata}
      >
      </video>
    </div>
  );
};

export default Video;
