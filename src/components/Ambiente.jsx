import { Background } from "./Background.jsx";
import { Clouds } from "./Clouds.jsx";
import { DirectionalLightHelper } from 'three'
import { useRef } from "react";
import { useHelper } from '@react-three/drei'
import { Suelo } from "./Suelo.jsx";

export function Ambiente() {
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

			<Background />

			<Clouds />

			<Suelo />
		</>
	)
}

/* <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} /> */