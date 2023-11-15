import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const initialRotationState = -1;

export function Crane() {
  const { nodes, materials } = useGLTF("/Crane_head.glb");
  const [rotation, setRotation] = useState(true);
  const craneHead = useRef();

  useFrame(() => {
    var newR = rotation;
    let newRotation = craneHead.current.rotation.z;
    let time = 0;

    if(newRotation < initialRotationState){
      newR = true;
    } else if(newRotation > 4.5){
      newR = false;
    }

    if(newR){
      time = 0.005;
    } else if(!newR){
      time = -0.005;
    }

    newRotation = newRotation + time;
    craneHead.current.rotation.z = newRotation;

    setRotation(newR);

  });

  return (
    <mesh
      ref={craneHead}
      name="Crane_Ground001"
      castShadow
      receiveShadow
      geometry={nodes.Crane_Ground001.geometry}
      material={materials["Submission_Diffuse_Shader.004"]}
      position={[-20.503, 0, -30.499]}
      rotation={[Math.PI / 2, 0, 0]}
    />
  );
}

useGLTF.preload("/Crane_head.glb");