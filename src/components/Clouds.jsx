import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

function getRandomBetween(max){
	return Math.floor(Math.random() * max);
}

export function Clouds({ count = 100, temp = new THREE.Object3D() }){
	const instancedMeshRef = useRef();
	const { nodes } = useGLTF("/Cloud_2.glb");

	useEffect(() => {
		//position
		for(let i=0; i<count; i++) {
			temp.rotation.set(-1.562, 0, 0);
			temp.position.set(getRandomBetween(300) - 250 , 170 - getRandomBetween(10), getRandomBetween(350) - 150 );
			const scale = getRandomBetween(4);
			temp.scale.set(scale, scale, scale);
			temp.opacity = 1;
			temp.updateMatrix();
			instancedMeshRef.current.setMatrixAt(i, temp.matrix);
		}

		//update instance
		instancedMeshRef.current.instanceMatrix.needsUpdate = true;
	}, []);

	return(
		<instancedMesh castShadow ref={instancedMeshRef} args={[null, null, count]} geometry={nodes.Mesh001.geometry}>
      <meshPhongMaterial color={'#eafbff'} opacity={0.5} transparent />
		</instancedMesh>
	)
}