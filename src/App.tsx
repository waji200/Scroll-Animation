import StaticPage from './Components/StaticPage'; // import the default export
import Video from './Components/Video';
import { Controller, Scene } from 'react-scrollmagic-r18';
import { StickyNavbar } from './Components/Navbar';

function App() {

  // will replace the image sequence with webm video


  // Function to generate the image sequence URLs
  const generateImageSequenceSrc = (numFrames: number, prefix: string, extension: string): string[] => {
    const imageSequence = [];
    for (let i = 0; i < numFrames; i++) {
      const frameNumber = i.toString().padStart(3, '0');
      const imageUrl = `${prefix}${frameNumber}.${extension}`;
      imageSequence.push(imageUrl);
    }
    return imageSequence;
  };


  // // Generate the array of image URLs
  const numFrames = 553;
  const prefix = '/Background_Animation'; // Replace with your actual image file prefix
  const extension = 'webp'; // Replace with your actual image file extension
  const imageSequenceSrc = generateImageSequenceSrc(numFrames, prefix, extension);
  console.log(imageSequenceSrc)




  return (
    <>
      <StickyNavbar ClassName='fixed top-0 left-0 z-50 flex justify-between backdrop-blur-md w-full' />
      <Controller>
        <Scene duration="1000%" triggerHook="onLeave" pin>
          {(progress: number) => (
            <div style={{ height: '100vh', width: '`100vw', position: 'relative', padding: 0 }} >

                <Video progress={progress} imageSequence={imageSequenceSrc} />

              <StaticPage progress={progress} imageSequence={imageSequenceSrc}/>
            </div>
          )}
        </Scene>
      </Controller>
    </>
  );
}

export default App;
