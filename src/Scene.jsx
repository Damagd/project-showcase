import { Ambiente } from "./components/Ambiente.jsx";
import { Actores } from "./components/Actores.jsx";
import { OrbitControls } from '@react-three/drei';

export function Scene() {

  return (
    <>
      <Ambiente />

      <Actores />
      
      <OrbitControls
      enablePan={false}
      maxPolarAngle={Math.PI / 2.1}
      minDistance={3}
      maxDistance={200}
      />
    </>

  );
}