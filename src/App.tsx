import { Controller, Scene } from 'react-scrollmagic-r18';
import Video from './Components/Video';

function App() {
  // Function to generate the image sequence URLs
  const generateImageSequenceSrc = (numFrames: number, prefix: string, extension: string): string[] => {
    const imageSequence = [];
    for (let i = 0; i < numFrames; i++) {
      const frameNumber = i.toString().padStart(5, '0');
      const imageUrl = `${prefix}${frameNumber}.${extension}`;
      imageSequence.push(imageUrl);
    }
    return imageSequence;
  };

  // Generate the array of image URLs
  const numFrames = 400;
  const prefix = '/hero_'; // Replace with your actual image file prefix
  const extension = 'webp'; // Replace with your actual image file extension
  const imageSequenceSrc = generateImageSequenceSrc(numFrames, prefix, extension);
  console.log(imageSequenceSrc)

  return (
    <>

      <Controller>
        <Scene duration="600%" triggerHook="onLeave" pin>
          {(progress: number) => (
            <div className='border-2 border-red-600 border-solid' style={{ height: '100vh', position: 'relative' }}>
              <Video progress={progress} imageSequenceSrc={imageSequenceSrc} />
            </div>
          )}
        </Scene>
      </Controller>
    </>
  );
}

export default App;
