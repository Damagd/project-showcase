import { useState, useEffect, useContext } from 'react';
import * as THREE from "three";
import { Sphere } from '@react-three/drei';
import { Gradient, LayerMaterial } from 'lamina';
import { OptionsContext } from "../../context/optionsOverlay.jsx";


export function Background ({mode}) {
	const {darkMode} = useContext(OptionsContext);
	const [colorA, setColorA] = useState("#6fa0fa");
	const [colorB, setColorB] = useState("#c3f1ff");

	useEffect(() => {
		if(darkMode === 'dark') {
			setColorB("#032c4a");
			setColorA("#00223b");
		} else {
			setColorB("#c3f1ff");
			setColorA("#6fa0fa");
		}
	}, [darkMode]);

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
					start={0.2}
					end={-0.1} 
					/>
				</LayerMaterial>
			</Sphere>
    </>
	)
}