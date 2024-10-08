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
        />
        <mesh
          name="Plane006_1"
          receiveShadow
          geometry={nodes.Plane006_1.geometry}
          material={materials["Submission_Diffuse_Shader.010"]}
        />
      </group>
      <mesh
        name="Roads001"
        receiveShadow
        geometry={nodes.Roads001.geometry}
        material={materials["Submission_Diffuse_Shader.012"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/HouseConstructionSite3.glb");