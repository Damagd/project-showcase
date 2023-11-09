import * as THREE from "three";
import { Environment, Sphere, Stars } from '@react-three/drei';
import { Gradient, LayerMaterial } from 'lamina';

export function Background () {
	const colorA = "#6fa0fa";
	const colorB = "#c3f1ff";
	const start = 0.2;
	const end = -0.1;

	return(
    <>
			<Sphere scale={[200, 200, 200]} rotation-y={Math.PI/2}>
				<LayerMaterial
				color={"#ffffff"}
				side={THREE.BackSide}
				>
					<Gradient 
					colorA={colorA} 
					colorB={colorB}
					axes={"y"}
					start={start}
					end={end} 
					/>
				</LayerMaterial>
			</Sphere>
    </>
	)
}

/*
			<Environment ground preset="night">

			</Environment>

			<Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

*/