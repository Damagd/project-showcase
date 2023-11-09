import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Crane(props) {
  const { nodes, materials } = useGLTF("/Crane_head.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Crane_Ground001"
        castShadow
        receiveShadow
        geometry={nodes.Crane_Ground001.geometry}
        material={materials["Submission_Diffuse_Shader.004"]}
        position={[-20.503, 0, -30.499]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/Crane_head.glb");