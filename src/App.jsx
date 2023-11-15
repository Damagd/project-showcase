import './App.css'
import { Canvas } from '@react-three/fiber'
import { Scene } from './Scene.jsx'

function App() {
  return (
    <Canvas shadows camera={{position: [-100, 60, -100], fov: 60}}>
      <Scene></Scene>
    </Canvas>
  )
}

export default App
