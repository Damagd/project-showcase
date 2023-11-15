import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Construction(props) {
  const { nodes, materials } = useGLTF("/HouseConstructionSite3.glb");
  return (
    <group {...props} dispose={null}>
      <group name="HouseConstructionSite001" rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          name="Plane006"
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Submission_Diffuse_Shader.009"]}
          onClick={((e) => {
            console.log('edificion: ', e.point)
          })}
        />
        <mesh
          name="Plane006_1"
          castShadow
          receiveShadow
          geometry={nodes.Plane006_1.geometry}
          material={materials["Submission_Diffuse_Shader.010"]}
          onClick={((e) => {
            console.log(e.point)
          })}
        />
      </group>
      <mesh
        name="Roads001"
        castShadow
        receiveShadow
        geometry={nodes.Roads001.geometry}
        material={materials["Submission_Diffuse_Shader.012"]}
        rotation={[Math.PI / 2, 0, 0]}
        onClick={((e) => {
          console.log(e.point)
        })}
      />
    </group>
  );
}

useGLTF.preload("/HouseConstructionSite3.glb");