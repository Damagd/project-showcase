import * as THREE from "three";
import { Environment, Sphere } from '@react-three/drei';
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
*/