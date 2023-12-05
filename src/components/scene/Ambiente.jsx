import { Background } from "./Background.jsx";
import { Clouds } from "./Clouds.jsx";
import { useContext, useState, useEffect } from "react";
import { Stars } from '@react-three/drei'
import { Suelo } from "./Suelo.jsx";
import { OptionsContext } from "../../context/optionsOverlay.jsx";


export function Ambiente() {
	const {darkMode} = useContext(OptionsContext);
	const [color, setColor] = useState('blue');
	const [position, setPosition] = useState([-100, 100, -100]);
	const [intensity, setIntensity] = useState(1);

	useEffect(() => {
		const colorL = darkMode === 'dark' ? 'blue' : 'white'
		const positionL = [
			-100,
			100,
			darkMode === 'dark' ? 100 : -100,
		];
	
		const intensity = darkMode === 'dark' ? 0.5 : 1;

		setColor(colorL);
		setPosition(positionL);
		setIntensity(intensity);
	}, [darkMode]);


	return (
		<>
			<ambientLight intensity={0.3} />

			<directionalLight
			color={color}
			intensity={intensity}
			castShadow 
			position={position} 
			shadow-mapSize={[1024, 1024]}
			shadow-bias={-0.0004}
			>
				<orthographicCamera attach="shadow-camera" args={[-100, 100, 100, -100]} />
			</directionalLight>

			{
			darkMode === 'dark'
			? <Stars radius={50} depth={40} count={500} factor={4} saturation={10} fade speed={5} />
			: <Clouds />
			}

			<Background mode={darkMode} />
		
			<Suelo />
		</>
	)
}

/* 
			{mode === 'light' && <Clouds />}
			
			{mode === 'dark' && <Stars radius={50} depth={50} count={500} factor={4} saturation={0} fade speed={1} />}

 */