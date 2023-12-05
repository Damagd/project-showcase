import { Ambiente } from "./Ambiente.jsx";
import { Actores } from "./Actores.jsx";
import { OrbitControls } from '@react-three/drei';
import { Suspense } from "react";

export function Scene() {

  return (
    <>
      <Ambiente/>

      <Suspense fallback={null}>
        <Actores />
      </Suspense>
      
      <OrbitControls
      enablePan={false}
      maxPolarAngle={Math.PI / 2.1}
      minDistance={3}
      maxDistance={200}
      />
    </>

  );
}