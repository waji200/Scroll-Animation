import { useEffect, useRef } from "react";
import BlobAnimation from "./BlobAnimation";
import Card from "./Card";
import gsap from "gsap";
import useSound from 'use-sound';
import sound1 from "../assets/sounds/sound1.mp3";
import sound2 from "../assets/sounds/sound2.mp3";
import sound3 from "../assets/sounds/sound3.mp3";
import sound4 from "../assets/sounds/sound4.mp3";

interface StaticPageProps {
  progress: number;
  imageSequence: string[];
}

const StaticPage: React.FC<StaticPageProps> = ({ progress, imageSequence }) => {

  const awardRef = useRef<HTMLDivElement | null>(null)
  const numFrames = 553
  const [playSound1, { stopSound1 }] = useSound(sound1);
  const [playSound2, { stopSound2 }] = useSound(sound2);
  const [playSound3, { stopSound3 }] = useSound(sound3);
  const [playSound4, { stopSound4 }] = useSound(sound4);


  const stopSoundFunctions = [stopSound1, stopSound2, stopSound3, stopSound4];
  // Function to stop all sounds
  const stopAllSounds = () => {
    stopSoundFunctions.forEach(stopSound => stopSound());
  };


  useEffect(() => {
    if(awardRef.current){
      if(progress === 553 / numFrames){
        gsap.to(awardRef.current, { autoAlpha: 1, translateY: -200, opacity: 1, duration: 2 })
      } else {
        gsap.to(awardRef.current, { autoAlpha: 0, translateY: 0, opacity: 0, duration: 1 })
      }
    }
    
    if(progress === 553 / numFrames){
      gsap.to(window, { scrollTo: { y: 6100, autoKill: false }, duration: 1 })
    }
  },[progress, numFrames])


  // Static pageunder the scrollable header

  return (
    <div className="w-full relative h-full p-6">

    {/* ~Award Section */}
    <div ref={awardRef} className="flex justify-center items-center gap-6 p-12 mx-auto text-white text-center">
      <div className="mt-20 h-80 w-60 ">
      <img  src="/awards-goldsmith.webp" alt="" />
      <h1 className="font-bold text-2xl">JERRY GOLDSMITH AWARD</h1>
      <p className="text-xl font-light">Nominee</p>
      </div>
      <div className="h-80 w-60 ">
      <img src="/awards-emmy.webp" alt="" />
      <h1 className="font-bold text-2xl">EMMY AWARD</h1>
      <p className="text-xl font-light">2 Times Nomineev<br/> 1x Winnter</p>
      </div>
      <div className="mt-20 h-80 w-60 ">
      <img src="/awards-ifmca.webp" alt="" />
      <h1 className="font-bold text-2xl">IFMCA AWARD</h1>
      <p className="text-xl font-light">Nominee</p>
      </div>
    </div>

      {/* Exlore section with buttons */}
      <div className="w-full relative h-[30rem] flex justify-center items-center overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:w-[60%] m-auto justify-center items-center relative p-16 gap-10">
            <div className="w-[25%]" onMouseEnter={() => playSound1()} onMouseLeave={stopAllSounds}>
            <div className="relative h-[25vmin] w-[25vmin] mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,1)]">
              <BlobAnimation className="h-full w-full absolute top-0 left-0 -z-10"/>
              <a href="#" className="font-bold text-3xl text-center flex justify-center items-center h-full w-full absolute top-0 left-0">About
              </a>
            </div>
            </div>
            <div className="w-[25%]" onMouseEnter={() => playSound2()} onMouseLeave={stopAllSounds}>
            <div className="relative h-[15vmin] w-[15vmin] mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,1)]">
              <BlobAnimation className="h-full w-full absolute top-0 left-0 -z-10"/>
              <a href="#" className="font-bold text-3xl text-center flex justify-center items-center h-full w-full absolute top-0 left-0">Store</a>
            </div>
            </div>
            <div className="w-[25%]" onMouseEnter={() => playSound3()} onMouseLeave={stopAllSounds}>
            <div className="relative h-[20vmin] w-[20vmin] mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,1)]">
              <BlobAnimation className="h-full w-full absolute top-0 left-0 -z-10"/>
              <a href="#" className="font-bold text-3xl text-center flex justify-center items-center h-full w-full absolute top-0 left-0">Work</a>
            </div>
            </div>
            <div className="w-[25%]" onMouseEnter={() => playSound4()} onMouseLeave={stopAllSounds}>
                <div className="relative h-[15vmin] w-[15vmin] mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,1)]">
                  <BlobAnimation className="h-full w-full absolute top-0 left-0 -z-10"/>
                  <a href="#" className="font-bold text-3xl text-center flex justify-center items-center h-full w-full absolute top-0 left-0">News</a>
                </div>
              </div>
            </div>
            <div className='-z-[2] h-full absolute top-0 w-screen text-center font-bold text-gray-700 opacity-50 tracking-wide uppercase flex justify-center items-center'>
              <h1 className="origin-center text-[25vw]">Explore</h1>  
            </div>
      </div>


      {/* Card section */}

      <div className="card-section flex justify-center gap-24">
        <Card/>
        <Card/>
      </div>


      {/* Leave a mesage section */}

      <div className="flex justify-center items-center w-full h-[70%] relative">
          <div className="bg-white rounded-full w-32 h-32 absolute opacity-50 blur-sm"/>
          <div className="bg-white rounded-full w-36 h-36 absolute blur-xl opacity-50"/>
            <h1 className="text-6xl text-white text-center">Leave A <br/>&#8599;<br/> Message</h1>
      </div>


      {/* Footer */}

      <footer>
        <ul className="flex justify-end py-6 px-8 gap-8 text-white">
          <li>
            <a href="#" className="flex justify-center items-center gap-2">
              <h1 className="text-2xl font-bold">Instagram</h1>
            </a>
          </li>
          <li>
            <a href="#" className="flex justify-center items-center gap-2">
              <h1 className="text-2xl font-bold">Soundcloud</h1>
            </a>
          </li> 
          <li>
            <a href="#" className="flex justify-center items-center gap-2">
              <h1 className="text-2xl font-bold">Facebook</h1>
            </a>
          </li>
        </ul>
      </footer>

    </div>
  );
}

export default StaticPage;
