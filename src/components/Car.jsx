import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Car(props) {
  const { nodes, materials } = useGLTF("/Red-car-cargo.glb");
  return (
    <mesh
    castShadow
    receiveShadow
    geometry={nodes.Dumper_Truck_Red.geometry}
    material={materials["Submission_Diffuse_Shader.003"]}
    position={[-53, 0, -42]}
    rotation={[Math.PI / 2, 0, -1]}
    />
  );
}

useGLTF.preload("/Red-car-cargo.glb");