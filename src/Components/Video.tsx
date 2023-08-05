import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface VideoProps {
  progress: number;
  imageSequenceSrc: string[];
}

const Video: React.FC<VideoProps> = ({ progress, imageSequenceSrc }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const numFrames = imageSequenceSrc.length;
  const currentFrameIndex = Math.floor(progress * (numFrames - 1));
  const currentImageSrc = imageSequenceSrc[currentFrameIndex];

  useEffect(() => {
    // Preload the images
    const preloadImages = () => {
      imageSequenceSrc.forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
      });
    };

    preloadImages();
  }, [imageSequenceSrc]);

  const text = textRef.current;

  useEffect(() => {
    // Show text overlay for 5 seconds when the image sequence starts
    if (text) {
      if (progress > 50 / numFrames && progress < 90 / numFrames) {
        gsap.to(text, { autoAlpha: 1, duration: 0.5, fontSize: '3em' });
      } else {
        gsap.to(text, { autoAlpha: 0, duration: 0.5, fontSize: '0.3em' });
      }
    }
  }, [progress, numFrames, text]);

  // Update image source without delay
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.src = currentImageSrc;
    }
  }, [currentImageSrc]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Text Overlay */}
      <div
        ref={textRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '0.3em',
          padding: '10px',
          borderRadius: '5px',
          pointerEvents: 'none',
          opacity: 0,
          color: 'white',
        }}
      >
        <h1>JAY L</h1>
      </div>

      {/* Image */}
      <img
        ref={imageRef}
        src={currentImageSrc}
        alt="Image Sequence"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default Video;
