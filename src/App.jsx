import './App.css'
import { Canvas } from '@react-three/fiber'
import { Scene } from './Scene.jsx'
import { Overlay } from './components/interface/Overlay.jsx'


function App() {
  return (
    <>
      <Canvas style={{position: 'fixed'}} shadows camera={{position: [-60, 0, -60], fov: 60}}>
        <Scene></Scene>
      </Canvas>

      <Overlay />
    </>
  )
}

export default App
