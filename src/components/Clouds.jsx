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


/*export function Clouds(props) {
  const { nodes } = useGLTF("/Cloud_2.glb");
  return (
    <group {...props} dispose={null} position={[0, 100, 0]} scale={[10,10,10]}>
      <group
        position={[-16.96, 16.463, 6.236]}
        rotation={[-1.562, 0, 0]}
        scale={0.546}
      >
        <mesh geometry={nodes.Mesh001.geometry}>
            <meshPhongMaterial color={'#eafbff'} opacity={0.7} transparent/>
        </mesh>
        <mesh geometry={nodes.Mesh001_1.geometry}>
					<meshPhongMaterial color={'#eafbff'} opacity={0.7} transparent/>
				</mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/Cloud_2.glb");*/