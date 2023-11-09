import { useRef } from "react";
import { Construction } from './components/Construction.jsx'
import { Constructor } from "./components/Constructor.jsx";
import { Car } from "./components/Car.jsx";
import { Crane } from "./components/Crane.jsx";
import { OrbitControls, useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'
import { Background } from "./components/Background.jsx";
import { Clouds } from "./components/Clouds.jsx";
import { Plane } from "@react-three/drei";
import { Cloud } from "@react-three/drei";

export function Scene() {

  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        color={'white'}
        intensity={1}
        castShadow 
        position={[-100, 100, 100]} 
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0004}
        ref={directionalLightRef}
        >
          <orthographicCamera attach="shadow-camera" args={[-100, 100, 100, -100]} />
      </directionalLight>

      <Background></Background>

      <Clouds></Clouds>

      <Construction />
      <Crane></Crane>
      <Constructor></Constructor>
      <Car></Car>

      <Plane args={[400, 400]} rotation={[-1.5708,0,0]} position={[0,-1,0]} receiveShadow >
        <meshStandardMaterial color={"#c3f1ff"} transparent opacity={0.05}/>
      </Plane>
      
      <OrbitControls />
    </>

  );
}

/*
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud segments={40} bounds={[10, 2, 2]} volume={15} color="#d4f3ff" position={[0,100,0]} />
        <Cloud seed={1} scale={2} volume={5} color="hotpink" fade={100} position={[0,100,20]} />
      </Clouds>
*/