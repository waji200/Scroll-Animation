import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface VideoProps {
  progress: number;
  imageSequenceSrc: string[];
}

const Video: React.FC<VideoProps> = ({ progress, imageSequenceSrc }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const numFrames = imageSequenceSrc.length;
  const [currentImage, setCurrentImage] = useState<HTMLImageElement | null>(null);
  const [isImageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
  
    if (currentImage && context) {
      // Calculate the dimensions to fit the image within the canvas height while preserving aspect ratio
      const canvasWidth = canvas!.parentElement!.clientWidth;
      const canvasHeight = canvas!.parentElement!.clientHeight;
      const imageAspectRatio = currentImage.width / currentImage.height;
      const canvasAspectRatio = canvasWidth / canvasHeight;
  
      let drawWidth = currentImage.width;
      let drawHeight = currentImage.height;
  
      if (imageAspectRatio > canvasAspectRatio) {
        // Image is wider than canvas
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imageAspectRatio;
      } else {
        // Image is taller than canvas or aspect ratios match
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imageAspectRatio;
      }
  
      // Center the image on the canvas
      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = (canvasHeight - drawHeight) / 2;
  
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(currentImage, offsetX, offsetY, drawWidth, drawHeight);
    }
  }, [progress, currentImage]);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setCurrentImage(image);
      setImageLoaded(true);
    };
    image.src = imageSequenceSrc[Math.floor(progress * (numFrames - 1))];
  }, [progress, numFrames, imageSequenceSrc]);

  useEffect(() => {
    // Show text overlay for 5 seconds when the image sequence starts
    if (textRef.current) {
      if (progress > 70 / numFrames && progress < 90 / numFrames) {
        gsap.to(textRef.current, { autoAlpha: 1, duration: 0.5, scale: '1' });
      } else {
        if(progress > 90 / numFrames){
        gsap.to(textRef.current, { autoAlpha: 0, duration: 0.5, scale: '2', });
      } else{
        gsap.to(textRef.current, { autoAlpha: 0, duration: 0.5, scale: '0.3' });
      }
      }
    }
  }, [progress, numFrames]);

  useEffect(() => {
    let animationFrameId: number;

    // Throttle the updates using requestAnimationFrame
    const updateImage = () => {
      if (isImageLoaded && currentImage) {
        animationFrameId = requestAnimationFrame(updateImage);
        setCurrentImage(null);
      }
    };

    if (isImageLoaded) {
      updateImage();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isImageLoaded, currentImage]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Text Overlay */}
      <div
        ref={textRef}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center'
      >
        <h1 className='text-white text-6xl'>JAY L</h1>
        <p className='text-xl text-yellow-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam illum quasi repellendus itaque in.</p>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={canvasRef.current?.parentElement?.clientWidth} // Adjust the canvas size as needed
        height={canvasRef.current?.parentElement?.clientHeight}
        // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default Video;
