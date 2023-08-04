import './App.css'
import { Controller, Scene } from 'react-scrollmagic-r18'
import Video from './Components/Video'

function App() {
  return (
    <>
      <Controller>
        <Scene duration="400%" triggerHook="onLeave" pin>
          {(progress: number) => (
            <div style={{height:'100vh', position: "relative" }}>
              <Video progress={progress} videoSrc='/Background.mp4' />
            </div>
          )}
        </Scene>
      </Controller>
    </>
  )
}

export default App
