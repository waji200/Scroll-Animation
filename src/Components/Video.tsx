import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface VideoProps {
  progress: number;
  imageSequenceSrc: string[];
}

const Video: React.FC<VideoProps> = ({ progress, imageSequenceSrc }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const numFrames = imageSequenceSrc.length;
  const currentFrameIndex = Math.floor(progress * (numFrames - 1));
  const currentImageSrc = imageSequenceSrc[currentFrameIndex];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const image = new Image();
  
    // Show text overlay for 5 seconds when the image sequence starts
    if (textRef.current) {
      if (progress > 50 / numFrames && progress < 120 / numFrames) {
        gsap.to(textRef.current, { autoAlpha: 1, duration: 0.5, fontSize: '3em' });
      } else {
        gsap.to(textRef.current, { autoAlpha: 0, duration: 0.5, fontSize: '0.3em' });
      }
    }
  
    // Load the image and draw it on the canvas
    image.onload = () => {
      if (context) {
        // Calculate the dimensions to fit the image within the canvas while preserving aspect ratio
        const canvasWidth = canvas!.width;
        const canvasHeight = canvas!.height;
        const imageAspectRatio = image.width / image.height;
        const canvasAspectRatio = canvasWidth / canvasHeight;
  
        let drawWidth = canvasWidth;
        let drawHeight = canvasHeight;
  
        if (imageAspectRatio > canvasAspectRatio) {
          // Image is wider than canvas
          drawWidth = canvasWidth;
          drawHeight = canvasWidth / imageAspectRatio;
        } else {
          // Image is taller than canvas
          drawWidth = canvasHeight * imageAspectRatio;
          drawHeight = canvasHeight;
        }
  
        // Center the image on the canvas
        const offsetX = (canvasWidth - drawWidth) / 2;
        const offsetY = (canvasHeight - drawHeight) / 2;
  
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
      }
    };
    image.src = currentImageSrc;
  }, [progress, numFrames, currentImageSrc]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Text Overlay */}
      <div
        ref={textRef}
        style={{
          position: 'absolute',
          top: '50%',
          color: 'white',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '0.3em',
          padding: '10px',
          borderRadius: '5px',
          pointerEvents: 'none',
          opacity: 0,
        }}
      >
        <h1 className='text-red-500'>JAY L</h1>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={window.innerWidth} // Adjust the canvas size as needed
        height={window.innerHeight}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default Video;
