import { Plane } from "@react-three/drei";

export function Suelo() {
	return (
		<Plane args={[400, 400]} rotation={[-1.5708,0,0]} position={[0,-1,0]} receiveShadow >
			<meshStandardMaterial color={"#c3f1ff"} transparent opacity={0.05}/>
		</Plane>
	)
}