import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface VideoProps {
  progress: number;
  imageSequenceSrc: string[];
  isImageLoaded: boolean;
  setImageLoaded: (value: boolean) => void;
}

const Video: React.FC<VideoProps> = ({ progress, imageSequenceSrc, isImageLoaded, setImageLoaded }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const imgElementRef = useRef<HTMLImageElement>(null);
  const numFrames = imageSequenceSrc.length;
  const [currentImage, setCurrentImage] = useState<HTMLImageElement | null>(null);
  

  useEffect(() => {
    const preloadImages = async () => {
      const images = await Promise.all(
        imageSequenceSrc.map((src) => {
          return new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = (err) => reject(err);
            img.src = src;
          });
        })
      );

      setCurrentImage(images[Math.floor(progress * (numFrames - 1))]);
      setImageLoaded(true);
    };

    preloadImages();
  }, [progress, numFrames, imageSequenceSrc, setImageLoaded]);

  useEffect(() => {
    let animationFrameId: number;

    const updateCanvas = () => {
      if (isImageLoaded && currentImage) {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (context) {
          const canvasWidth = canvas!.parentElement!.clientWidth;
          const canvasHeight = canvas!.parentElement!.clientHeight;

          context.clearRect(0, 0, canvasWidth, canvasHeight);

          const imageAspectRatio = currentImage.width / currentImage.height;
          const canvasAspectRatio = canvasWidth / canvasHeight;

          let drawWidth = currentImage.width;
          let drawHeight = currentImage.height;

          if (imageAspectRatio > canvasAspectRatio) {
            drawHeight = canvasHeight;
            drawWidth = canvasHeight * imageAspectRatio;
          } else {
            drawWidth = canvasWidth;
            drawHeight = canvasWidth / imageAspectRatio;
          }

          const offsetX = (canvasWidth - drawWidth) / 2;
          const offsetY = (canvasHeight - drawHeight) / 2;

          context.drawImage(currentImage, offsetX, offsetY, drawWidth, drawHeight);
        }
      }

      animationFrameId = requestAnimationFrame(updateCanvas);
    };

    if (isImageLoaded && currentImage) {
      animationFrameId = requestAnimationFrame(updateCanvas);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isImageLoaded, currentImage]);

  useEffect(() => {
    // Show text overlay for 5 seconds when the image sequence starts
    if (textRef.current) {
      if (progress > 70 / numFrames && progress < 90 / numFrames) {
        gsap.to(textRef.current, { autoAlpha: 1, duration: 0.5, scale: '1', display: 'block' });
      } else if (progress > 90 / numFrames) {
        gsap.to(textRef.current, { autoAlpha: 0, duration: 0.5, scale: '2', display: 'none' });
      } else {
        gsap.to(textRef.current, { autoAlpha: 0, duration: 0.5, scale: '0.3', display: 'none' });
      }
    }
    if (textRef2.current) {
      if (progress > 170 / numFrames && progress < 220 / numFrames) {
        gsap.to(textRef2.current, { autoAlpha: 1, duration: 0.5, translateX: 0, display: 'block' });
      } else if (progress > 220 / numFrames) {
        gsap.to(textRef2.current, { autoAlpha: 0, duration: 0.5, translateX: -100, display: 'none' });
      } else {
        gsap.to(textRef2.current, { autoAlpha: 0, duration: 0.5, translateX: 100, display: 'none' });
      }
    }
    if (textRef3.current) {
      if (progress > 230 / numFrames && progress < 270 / numFrames) {
        gsap.to(textRef3.current, { autoAlpha: 1, duration: 0.5, translateY: 0, display: 'block' });
      } else if (progress > 270 / numFrames) {
        gsap.to(textRef3.current, { autoAlpha: 0, duration: 0.5, translateY: -100, display: 'none' });
      } else {
        gsap.to(textRef3.current, { autoAlpha: 0, duration: 0.5, translateY: 100, display: 'none' });
      }
    }
    let animationFrame: number;

    const updateScaling = () => {
      if (imgRef.current) {
        if (progress > 300 / numFrames && progress < 400 / numFrames) {
          const scaleValue =
            (progress - 300 / numFrames) * (30 / (400 / numFrames - 300 / numFrames));
          gsap.set(imgRef.current, { autoAlpha: 1, scale: scaleValue, display: 'flex' });
        } else {
          gsap.set(imgRef.current, { autoAlpha: 0, scale: '0', display: 'hidden' });
        }
      }
      animationFrame = requestAnimationFrame(updateScaling);
    };

    updateScaling();

    return () => cancelAnimationFrame(animationFrame);
    
  }, [progress, numFrames]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Text Overlay */}
      <div
        ref={textRef}
        className='absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center'
      >
        <h1 className='text-white text-6xl drop-shadow-[0_0_3px_rgba(255,255,255,1)]'>JAY L</h1>
        <p className='text-xl text-yellow-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam illum quasi repellendus itaque in.</p>
      </div>
      {/* Text Overlay */}
      <div
        ref={textRef2}
        className='absolute hidden w-[95%] bottom-0 top-0 text-white font-bold shrink-0'
      >
        <p className='text-xl text-white absolute top-[10%] right-0 text-end translate-y-1/2 w-[30%]'>...embodies the harmony of music and psychology, adding emotional dept to narratives and fosters strong audience connections.</p>
        <h1 className='text-white absolute bottom-5 left-5 text-6xl drop-shadow-[0_0_3px_rgba(255,56,46,1)]'>Music for Flim...</h1>
      </div>
      {/* Text Overlay */}
      <div
        ref={textRef3}
        className='absolute hidden w-[95%] bottom-0 top-0 text-white font-bold shrink-0'
      >
        <p className='text-xl text-white absolute bottom-[15%] right-0 text-end translate-y-1/2 w-[40%]'>has paved his own musical path, and through years of study and experimentation, crafted a voice that both respects music traditions and explores new bounds.</p>
        <h1 className='text-white absolute top-1/3 left-[5%] text-6xl drop-shadow-[0_0_3px_rgba(255,56,46,1)]'>DARE. DISCOVERY. CREATION.</h1>
      </div>
      {/* Img Overlay */}
      <div
        ref={imgRef}
        className='absolute w-full h-full flex justify-center items-center text-white font-bold shrink-0'
      >
        <img ref={imgElementRef} className='rounded-full w-32 h-32 absolute top-1/2 left-1/2' src="/project-bbc-frozen-planet-2.webp" alt="" />
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
