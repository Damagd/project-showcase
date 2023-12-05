import { useGLTF } from "@react-three/drei";

export function Car() {
  const { nodes, materials } = useGLTF("/Red-car-cargo.glb");
  
  return (
    <mesh
    castShadow
    receiveShadow
    geometry={nodes.Dumper_Truck_Red.geometry}
    material={materials["Submission_Diffuse_Shader.003"]}
    rotation={[Math.PI*0.5,0,0]}
    >
    </mesh>
  );
}

useGLTF.preload("/Red-car-cargo.glb");
