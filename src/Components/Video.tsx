import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
// import AnimationVideo from '/AnimationVideo.webm'
// import AnimationVideoMp4 from '/Background.mp4'

interface VideoProps {
  progress: number;
  imageSequence: string[];
}

gsap.registerPlugin(ScrollTrigger);
const Video: React.FC<VideoProps> = ({ progress, imageSequence }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // TODO: Below is the video ref to be combined with html video element
  // const videoRef = useRef<HTMLVideoElement | null>(null)
  const textRef = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const imgElementRef = useRef<HTMLImageElement>(null);
  const imgElement2Ref = useRef<HTMLImageElement>(null);
  const imgElement3Ref = useRef<HTMLImageElement>(null);
  const imgElement4Ref = useRef<HTMLImageElement>(null);
  const imgElement5Ref = useRef<HTMLImageElement>(null);
  const imgElement6Ref = useRef<HTMLImageElement>(null);
  const imgElement7Ref = useRef<HTMLImageElement>(null);
  const imgElement8Ref = useRef<HTMLImageElement>(null);
  const imgElement9Ref = useRef<HTMLImageElement>(null);
  const imgElement10Ref = useRef<HTMLImageElement>(null);
  const imgElement11Ref = useRef<HTMLImageElement>(null);
  const imgElement12Ref = useRef<HTMLImageElement>(null);
  const numFrames = 553;
  const [currentImage, setCurrentImage] = useState<HTMLImageElement | null>(null);
  const [isImageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const images = await Promise.all(
        imageSequence.map((src) => {
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
      if(progress < 5 / numFrames){
        gsap.to(window, { scrollTo: { y: 3500, autoKill: false }, duration: 1 })
      }
    };

    preloadImages();

  }, [progress, numFrames, imageSequence]);


// TODO: This is the video code

// useEffect(() => {

//   if (videoRef.current) {
//     const numFrames = 553; // Adjust the number of frames in your video
//     const frameHeight = window.innerHeight / numFrames; // Height per frame

//     if(!frameHeight) return;
    
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: videoRef.current,
//         scrub: true, // Enable smooth scrubbing
//          // Pin the video container while it's in view
//         start: 'top top', // Start pinning at the top of the video
//         end: `+=${frameHeight * numFrames}`, // Pin for the entire video height
//         onUpdate: (self) => {
//           const scrollProgress = self.progress;
//           console.log(scrollProgress)
//           if(!scrollProgress) return;
//           if (videoRef.current) {
//           const updatedTime = (scrollProgress * numFrames) / videoRef.current.duration;
//           console.log(updatedTime)
//           videoRef.current.currentTime = updatedTime;
//           }
//         },
//       },
//     });

//     tl.to({}, {}); // Just an empty animation to trigger the ScrollTrigger
//   }
// });





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
};

    if (isImageLoaded && currentImage) {
      animationFrameId = requestAnimationFrame(updateCanvas);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isImageLoaded, currentImage, progress]);

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
        if (progress > 300 / numFrames && progress < 553 / numFrames) {
          const scaleValue =
            (progress - 300 / numFrames) * (20 / (553 / numFrames - 300 / numFrames) * 0.2);
          gsap.set(imgRef.current, { autoAlpha: 1, scale: scaleValue * 2, display: 'flex' });
        } else {
          gsap.set(imgRef.current, { autoAlpha: 0, scale: '0', display: 'hidden' });
        }
      }
      if(imgElementRef.current){
        if(progress > 302 / numFrames && progress < 553 / numFrames){
          const translateValues =
          (progress - 302 / numFrames) * (30 / (553 / numFrames - 302 / numFrames) * 30);
          gsap.set(imgElementRef.current, {autoAlpha: 1, translateX: translateValues * 0.7, translateY: translateValues * 0.5, scale: translateValues * 0.005});
        } else{
          gsap.set(imgElementRef.current, {autoAlpha: 1, translateX: 0, translateY: 0, scale: 0})
        }
      }
      if(imgElement2Ref.current){
        if(progress > 304 / numFrames && progress < 553 / numFrames){
          const translateValues =
          (progress - 304 / numFrames) * (30 / (553 / numFrames - 304 / numFrames) * 25);
          gsap.set(imgElement2Ref.current, {autoAlpha: 1, translateX: translateValues * 0.8, translateY: -translateValues * 0.5, scale: translateValues * 0.005});
        } else{
          gsap.set(imgElement2Ref.current, {autoAlpha: 1, translateX: 0, translateY: 0, scale: 0})
        }
      }
      if(imgElement3Ref.current){
        if(progress > 306 / numFrames && progress < 553 / numFrames){
          const translateValues =
          (progress - 306 / numFrames) * (30 / (553 / numFrames - 306 / numFrames) * 25);
          gsap.set(imgElement3Ref.current, {autoAlpha: 1, translateX: -translateValues * 0.9, translateY: -translateValues * 0.5, scale: translateValues * 0.005});
        } else{
          gsap.set(imgElement3Ref.current, {autoAlpha: 1, translateX: 0, translateY: 0, scale: 0})
        }
      }
      if(imgElement4Ref.current){
        if(progress > 308 / numFrames && progress < 553 / numFrames){
          const translateValues =
          (progress - 308 / numFrames) * (30 / (553 / numFrames - 308 / numFrames) * 25);
          gsap.set(imgElement4Ref.current, {autoAlpha: 1, translateX: -translateValues, translateY: translateValues * 0.5, scale: translateValues * 0.005});
        } else{
          gsap.set(imgElement4Ref.current, {autoAlpha: 1, translateX: 0, translateY: 0, scale: 0})
        }
      }
      if(imgElement5Ref.current){
        if(progress > 312 / numFrames && progress < 553 / numFrames){
          const translateValues =
          (progress - 312 / numFrames) * (30 / (553 / numFrames - 312 / numFrames) * 22);
          gsap.set(imgElement5Ref.current, {autoAlpha: 1, translateX: translateValues * 0.3, translateY: -translateValues * 0.8, scale: translateValues * 0.003});
        } else{
          gsap.set(imgElement5Ref.current, {autoAlpha: 1, translateX: 0, translateY: 0, scale: 0})
        }
      }
      if(imgElement6Ref.current){
        if(progress > 314 / numFrames && progress < 553 / numFrames){
          const translateValues =
          (progress - 314 / numFrames) * (30 / (553 / numFrames - 314 / numFrames) * 22);
          gsap.set(imgElement6Ref.current, {autoAlpha: 1, translateX: translateValues * 0.6, translateY: -translateValues * 0.4, scale: translateValues * 0.003});
        } else{
          gsap.set(imgElement6Ref.current, {autoAlpha: 1, translateX: 0, translateY: 0, scale: 0})
        }
      }
      if(imgElement7Ref.current){
        if(progress > 316 / numFrames && progress < 553 / numFrames){
          const translateValues =
          (progress - 316 / numFrames) * (30 / (553 / numFrames - 316 / numFrames) * 22);
          gsap.set(imgElement7Ref.current, {autoAlpha: 1, translateX: -translateValues * 0.6, translateY: translateValues * 0.3, scale: translateValues * 0.003});
        } else{
          gsap.set(imgElement7Ref.current, {autoAlpha: 1, translateX: 0, translateY: 0, scale: 0})
        }
      }
      if(imgElement8Ref.current){
        if(progress > 318 / numFrames && progress < 553 / numFrames){
          const translateValues =
          (progress - 318 / numFrames) * (30 / (553 / numFrames - 318 / numFrames) * 22);
          gsap.set(imgElement8Ref.current, {autoAlpha: 1, translateX: -translateValues * 0.5, translateY: -translateValues * 0.3, scale: translateValues * 0.003});
        } else{
          gsap.set(imgElement8Ref.current, {autoAlpha: 1, translateX: 0, translateY: 0, scale: 0})
        }
      }
      if(imgElement9Ref.current){
        if(progress > 324 / numFrames && progress < 553 / numFrames){
          const translateValues =
          (progress - 324 / numFrames) * (30 / (553 / numFrames - 324 / numFrames) * 19);
          gsap.set(imgElement9Ref.current, {autoAlpha: 1, translateX: -translateValues * 0.13, translateY: -translateValues * 0.3, scale: translateValues * 0.002});
        } else{
          gsap.set(imgElement9Ref.current, {autoAlpha: 1, translateX: 0, translateY: 0, scale: 0})
        }
      }
      if(imgElement10Ref.current){
        if(progress > 326 / numFrames && progress < 553 / numFrames){
          const translateValues =
          (progress - 326 / numFrames) * (30 / (553 / numFrames - 326 / numFrames) * 19);
          gsap.set(imgElement10Ref.current, {autoAlpha: 1, translateX: translateValues * 0.5, translateY: -translateValues * 0.2, scale: translateValues * 0.002});
        } else{
          gsap.set(imgElement10Ref.current, {autoAlpha: 1, translateX: 0, translateY: 0, scale: 0})
        }
      }
      if(imgElement11Ref.current){
        if(progress > 328 / numFrames && progress < 553 / numFrames){
          const translateValues =
          (progress - 328 / numFrames) * (30 / (553 / numFrames - 328 / numFrames) * 19);
          gsap.set(imgElement11Ref.current, {autoAlpha: 1, translateX: -translateValues * 0.11, translateY: translateValues * 0.2, scale: translateValues * 0.002});
        } else{
          gsap.set(imgElement11Ref.current, {autoAlpha: 1, translateX: 0, translateY: 0, scale: 0})
        }
      }
      if(imgElement12Ref.current){
        if(progress > 330 / numFrames && progress < 553 / numFrames){
          const translateValues =
          (progress - 330 / numFrames) * (30 / (553 / numFrames - 330 / numFrames) * 19);
          gsap.set(imgElement12Ref.current, {autoAlpha: 1, translateX: -translateValues * 0.5, translateY: -translateValues * 0.2, scale: translateValues * 0.002});
        } else{
          gsap.set(imgElement12Ref.current, {autoAlpha: 1, translateX: 0, translateY: 0, scale: 0})
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
        <h1 className='text-white absolute top-[15%] left-[5%] text-6xl drop-shadow-[0_0_3px_rgba(255,56,46,1)]'>DARE. DISCOVERY. CREATION.</h1>
      </div>
      {/* Img Overlay */}
      <div
        ref={imgRef}
        className='absolute w-full h-full flex justify-center items-center text-white font-bold shrink-0'
      >
        <div ref={imgElementRef} className={`rounded-full w-32 h-32 absolute top-[40%] left-[45%] z-[12] overflow-clip cursor-pointer bg-[url('/project-bbc-frozen-planet-2.webp')] bg-cover`}>
  <div className='w-full h-full opacity-0 hover:bg-black hover:opacity-70 transition-all duration-300 text-center flex flex-col justify-center items-center'>
    <h1>Heading</h1>
    <p className='text-xs'>paragraph about the photo</p>
  </div>
</div>
<div ref={imgElement2Ref} className={`rounded-full w-32 h-32 absolute top-[45%] left-[45%] z-[11] overflow-clip cursor-pointer bg-[url('/project-cnn-this-morning.webp')] bg-cover`}>
  <div className='w-full h-full opacity-0 hover:bg-black hover:opacity-70 transition-all duration-300 text-center flex flex-col justify-center items-center'>
    <h1>Heading</h1>
    <p className='text-xs'>paragraph about the photo</p>
  </div>
</div>
<div ref={imgElement3Ref} className={`rounded-full w-32 h-32 absolute top-[45%] right-[45%] z-[10] overflow-clip cursor-pointer bg-[url('/project-primate.webp')] bg-cover`}>
  <div className='w-full h-full opacity-0 hover:bg-black hover:opacity-70 transition-all duration-300 text-center flex flex-col justify-center items-center'>
    <h1>Heading</h1>
    <p className='text-xs'>paragraph about the photo</p>
  </div>
</div>
<div ref={imgElement4Ref} className={`rounded-full w-32 h-32 absolute bottom-[40%] right-[45%] z-[9] overflow-clip cursor-pointer bg-[url('/project-planet-earth.webp')] bg-cover`}>
  <div className='w-full h-full opacity-0 hover:bg-black hover:opacity-70 transition-all duration-300 text-center flex flex-col justify-center items-center'>
    <h1>Heading</h1>
    <p className='text-xs'>paragraph about the photo</p>
  </div>
</div>
<div ref={imgElement5Ref} className={`rounded-full w-32 h-32 absolute top-[50%] left-[45%] z-[8] overflow-clip cursor-pointer bg-[url('/project-jeopardy.webp')] bg-cover`}>
  <div className='w-full h-full opacity-0 hover:bg-black hover:opacity-70 transition-all duration-300 text-center flex flex-col justify-center items-center'>
    <h1>Heading</h1>
    <p className='text-xs'>paragraph about the photo</p>
  </div>
</div>
<div ref={imgElement6Ref} className={`rounded-full w-32 h-32 absolute top-[55%] left-[45%] z-[7] overflow-clip cursor-pointer bg-[url('/project-being-the-queen.webp')] bg-cover`}>
  <div className='w-full h-full opacity-0 hover:bg-black hover:opacity-70 transition-all duration-300 text-center flex flex-col justify-center items-center'>
    <h1>Heading</h1>
    <p className='text-xs'>paragraph about the photo</p>
  </div>
</div>
<div ref={imgElement7Ref} className={`rounded-full w-32 h-32 absolute top-[40%] right-[43%] z-[6] overflow-clip cursor-pointer bg-[url('/project-frozen-planet-2.webp')] bg-cover`}>
  <div className='w-full h-full opacity-0 hover:bg-black hover:opacity-70 transition-all duration-300 text-center flex flex-col justify-center items-center'>
    <h1>Heading</h1>
    <p className='text-xs'>paragraph about the photo</p>
  </div>
</div>
<div ref={imgElement8Ref} className={`rounded-full w-32 h-32 absolute bottom-[40%] right-[45%] z-[5] overflow-clip cursor-pointer bg-[url('/project-minecraft-legends.webp')] bg-cover`}>
  <div className='w-full h-full opacity-0 hover:bg-black hover:opacity-70 transition-all duration-300 text-center flex flex-col justify-center items-center'>
    <h1>Heading</h1>
    <p className='text-xs'>paragraph about the photo</p>
  </div>
</div>
<div ref={imgElement9Ref} className={`rounded-full w-32 h-32 absolute top-[45%] left-[50%] z-[4] overflow-clip cursor-pointer bg-[url('/project-flooded-tombs.webp')] bg-cover`}>
  <div className='w-full h-full opacity-0 hover:bg-black hover:opacity-70 transition-all duration-300 text-center flex flex-col justify-center items-center'>
    <h1>Heading</h1>
    <p className='text-xs'>paragraph about the photo</p>
  </div>
</div>
<div ref={imgElement10Ref} className={`rounded-full w-32 h-32 absolute top-[45%] left-[40%] z-[3] overflow-clip cursor-pointer bg-[url('/project-national-geographic.webp')] bg-cover`}>
  <div className='w-full h-full opacity-0 hover:bg-black hover:opacity-70 transition-all duration-300 text-center flex flex-col justify-center items-center'>
    <h1>Heading</h1>
    <p className='text-xs'>paragraph about the photo</p>
  </div>
</div>
<div ref={imgElement11Ref} className={`rounded-full w-32 h-32 absolute bottom-[45%] right-[43%] z-[2] overflow-clip cursor-pointer bg-[url('/project-roman-empire.webp')] bg-cover`}>
  <div className='w-full h-full opacity-0 hover:bg-black hover:opacity-70 transition-all duration-300 text-center flex flex-col justify-center items-center'>
    <h1>Heading</h1>
    <p className='text-xs'>paragraph about the photo</p>
  </div>
</div>
<div ref={imgElement12Ref} className={`rounded-full w-32 h-32 absolute top-[45%] right-[41%] z-[1] overflow-clip cursor-pointer bg-[url('/project-superbowl-lv.webp')] bg-cover`}>
  <div className='w-full h-full opacity-0 hover:bg-black hover:opacity-70 transition-all duration-300 text-center flex flex-col justify-center items-center'>
    <h1>Heading</h1>
    <p className='text-xs'>paragraph about the photo</p>
  </div>
</div>

      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={canvasRef.current?.parentElement?.clientWidth} // Adjust the canvas size as needed
        height={canvasRef.current?.parentElement?.clientHeight}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        </canvas>

        {/* Video Component */}
        {/* <video src={AnimationVideo}
        ref={videoRef} 
        width={canvasRef.current?.parentElement?.clientWidth} // Adjust the canvas size as needed
        height={canvasRef.current?.parentElement?.clientHeight}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        preload='auto'
        playsInline
        controls        ></video> */}
    </div>
  );
};

export default Video;
