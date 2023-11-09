import './App.css'
import { Canvas } from '@react-three/fiber'
import { Scene } from './Scene.jsx'

function App() {
  return (
    <Canvas shadows>
      <Scene></Scene>
    </Canvas>
  )
}

export default App
