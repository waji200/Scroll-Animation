import { useEffect, useRef } from "react";
import BlobAnimation from "./BlobAnimation";
import Card from "./Card";
import gsap from "gsap";
import sound1 from "../assets/sounds/sound1.mp3";
import sound2 from "../assets/sounds/sound2.mp3";
import sound3 from "../assets/sounds/sound3.mp3";
import sound4 from "../assets/sounds/sound4.mp3";

interface StaticPageProps {
  progress: number;
  imageSequence: string[];
}

const StaticPage: React.FC<StaticPageProps> = ({ progress }) => {

  const awardRef = useRef<HTMLDivElement | null>(null)
  const numFrames = 553

  const audio1 = useRef<HTMLAudioElement>(null);
  const audio2 = useRef<HTMLAudioElement>(null);
  const audio3 = useRef<HTMLAudioElement>(null);
  const audio4 = useRef<HTMLAudioElement>(null);

  const Sounds = [audio1, audio2, audio3, audio4]

  const soundHover = (index: number) => {
    if (index === null || Sounds[index]?.current === undefined) {
      return;
    }
  
    const soundElement = Sounds[index].current;
  
    if (soundElement) {
      soundElement.currentTime = 0;
      soundElement.play();
    }
  }
  const stopSound = (index: number) => {
    if(Sounds[index].current){
      setTimeout(() => {
      Sounds[index].current?.pause();
      },500)
    }
  }

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
            <button className="w-[100%] bg-red-500">
            <div className="relative h-[25vmin] w-[25vmin] mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,1)]" onMouseEnter={() => soundHover(0)} onMouseLeave={() => stopSound(0)}>
              <audio ref={audio1} src={sound1} preload="auto">
              </audio>
              <BlobAnimation className="h-full w-full absolute top-0 left-0 -z-10"/>
              <a href="#" className="font-bold text-3xl text-center flex justify-center items-center h-full w-full absolute top-0 left-0">About
              </a>
            </div>
            </button>
            <button className="w-[100%] bg-blue-600">
            <div className="relative h-[15vmin] w-[15vmin] mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,1)]" onMouseEnter={() => soundHover(1)} onMouseLeave={() => stopSound(1)}>
              <audio ref={audio2} src={sound2} preload="auto">
              </audio>
              <BlobAnimation className="h-full w-full absolute top-0 left-0 -z-10"/>
              <a href="#" className="font-bold text-3xl text-center flex justify-center items-center h-full w-full absolute top-0 left-0">Store</a>
            </div>
            </button>
            <button className="w-[100%] bg-green-500">
            <div className="relative h-[20vmin] w-[20vmin] mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,1)]" onMouseEnter={() => soundHover(2)} onMouseLeave={() => stopSound(2)}>
              <audio ref={audio3} src={sound3} preload="auto">
              </audio>
              <BlobAnimation className="h-full w-full absolute top-0 left-0 -z-10"/>
              <a href="#" className="font-bold text-3xl text-center flex justify-center items-center h-full w-full absolute top-0 left-0">Work</a>
            </div>
            </button>
            <button className="w-[100%] bg-purple-500">
                <div className="relative h-[15vmin] w-[15vmin] mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,1)]" onMouseEnter={() => soundHover(3)} onMouseLeave={() => stopSound(3)}>
              <audio ref={audio4} src={sound4} preload="auto">
              </audio>
                  <BlobAnimation className="h-full w-full absolute top-0 left-0 -z-10"/>
                  <a href="#" className="font-bold text-3xl text-center flex justify-center items-center h-full w-full absolute top-0 left-0">News</a>
                </div>
              </button>
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
