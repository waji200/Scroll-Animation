import { useRef } from 'react'
import './App.css'
import { Controller, Scene } from 'react-scrollmagic-r18'
import Sequence from './assets/Components/Sequence/index'

function App() {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <>
      <Controller>
        <Scene duration="400%" triggerHook="onLeave" pin>
          {(progress: number) => (
            <div style={{ height: "100vh", position: "relative" }}>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
    </>
  )
}

export default App
