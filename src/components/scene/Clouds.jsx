import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const temp = new THREE.Object3D();
const tempMatrix = new THREE.Matrix4();

function getRandomBetween(max){
	return Math.floor(Math.random() * max);
}

export function Clouds({ count = 150}){
	const instancedMeshRef = useRef();
	const { nodes } = useGLTF("/Cloud_2.glb");


	useFrame(() => {

		for(let i=0; i<count; i++){
			instancedMeshRef.current.getMatrixAt(i, tempMatrix);
			tempMatrix.decompose(temp.position,temp.rotation,temp.scale);

			temp.position.z > 215 ? temp.position.z = -185 : temp.position.z += 0.08 + getRandomBetween(0.9);

			
			temp.updateMatrix();
			instancedMeshRef.current.setMatrixAt(i, temp.matrix);
		}

		instancedMeshRef.current.instanceMatrix.needsUpdate = true;
	})

	useLayoutEffect(() => {
		//position
		for(let i=0; i<count; i++) {
			temp.rotation.set(-1.562, 0, 0);
			temp.position.set(getRandomBetween(300) - 250 , 160 - getRandomBetween(10), getRandomBetween(350) - 150 );
			const scale = getRandomBetween(4);
			temp.scale.set(scale, scale, scale);
			temp.updateMatrix();
			instancedMeshRef.current.setMatrixAt(i, temp.matrix);
		}

		//update instance
		instancedMeshRef.current.instanceMatrix.needsUpdate = true;
	}, []);

	return(
		<instancedMesh castShadow ref={instancedMeshRef} args={[nodes.Mesh001.geometry, null, count]}>
      <meshPhongMaterial color={'#ffffff'} opacity={0.5} transparent />
		</instancedMesh>
	)
}