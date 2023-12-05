import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useAnimations } from "@react-three/drei";

export function Constructor({ isWalking = false, position=[0,0,0], rotation=[0,0,0] }) {
  const group = useRef();
  const { nodes, animations } = useGLTF("/Constructora.glb");
  const { actions, names } = useAnimations(animations, group);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if(isWalking)
      actions[names].reset().fadeIn(0.5).play()
    else if(!loaded){
      group.current.position.x = position[0];
      group.current.position.y = position[1];
      group.current.position.z = position[2];

      group.current.rotateX(rotation[0]);
      group.current.rotateY(rotation[1]);
      group.current.rotateZ(rotation[2]);

      setLoaded(true);
    }
  }, [group.current])

  return (
    <group name="Scene" ref={group} position={position} scale={0.13} dispose={null}>
      <group name="Node_0" >
        <group name="Casco" position={[0, 7.493, 0]}>
          <mesh
            name="Ellipse"

            geometry={nodes.Ellipse.geometry}
            position={[0.006, -1.875, 0]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.828}
          >
            <meshStandardMaterial color={'#EC892E'}/>
          </mesh>
          <mesh
            name="Cube_5"

            geometry={nodes.Cube_5.geometry}
            position={[0.008, -1.872, -0.191]}
            scale={0.075}
          >
            <meshStandardMaterial color={'#EC892E'}/>
          </mesh>
        </group>
        <group name="Cuerpo" position={[0.008, 5.193, -0.191]}>
          <mesh
            name="Chaleco"

            geometry={nodes.Chaleco.geometry}
            position={[0, -9.195, 0]}
            scale={[0.069, 0.107, 0.069]}
          >
            <meshStandardMaterial color={'#D6642C'}/>
          </mesh>
          <mesh
            name="Playera"
            geometry={nodes.Playera.geometry}
            position={[0, -9.195, 0]}
            scale={[0.069, 0.107, 0.069]}
          >
            <meshStandardMaterial color={'white'}/>
          </mesh>
          <mesh
            name="Cabeza"

            geometry={nodes.Cabeza.geometry}
            material={nodes.Cabeza.material}
            position={[0, -1.46, 0]}
            scale={0.069}
          >
            <meshStandardMaterial color={'#A78260'}/>
          </mesh>
          <mesh
            name="Pantalones"
            geometry={nodes.Pantalones.geometry}
            material={nodes.Pantalones.material}
            position={[0, -9.195, 0]}
            scale={[0.069, 0.107, 0.069]}
          >
            <meshStandardMaterial color={'#284B70'}/>
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Constructora.glb");


/*
  const { nodes } = useGLTF("/Constructor.glb");

  return (
    <group scale={0.13}>
      <group name="Casco" position={[0, 6.4, 0]} >
        <mesh
          name="Ellipse"
          castShadow

          geometry={nodes.Ellipse.geometry}
          position={[0.006, -1.875, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.828}
        >
          <meshStandardMaterial color={'#EC892E'}/>
        </mesh>
        <mesh
          name="Cube_5"
          castShadow

          geometry={nodes.Cube_5.geometry}
          position={[0.008, -1.872, -0.191]}
          scale={0.075}
        >
          <meshStandardMaterial color={'#EC892E'}/>
        </mesh>
      </group>
      <group name="Cuerpo" position={[0.008, 5.193, -0.191]}>
        <mesh
          name="Chaleco"
          castShadow

          geometry={nodes.Chaleco.geometry}
          position={[0, -9.195, 0]}
          scale={[0.069, 0.107, 0.069]}
        >
          <meshStandardMaterial color={'#D6642C'}/>
        </mesh>
        <mesh
          name="Playera"
          castShadow
          geometry={nodes.Playera.geometry}
          position={[0, -9.195, 0]}
          scale={[0.069, 0.107, 0.069]}
        >
          <meshStandardMaterial color={'white'}/>
        </mesh>
        <mesh
          name="Cabeza"
          castShadow

          geometry={nodes.Cabeza.geometry}
          material={nodes.Cabeza.material}
          position={[0, -1.46, 0]}
          scale={0.069}
        >
          <meshStandardMaterial color={'#A78260'}/>
        </mesh>
        <mesh
          name="Pantalones"
          castShadow

          geometry={nodes.Pantalones.geometry}
          material={nodes.Pantalones.material}
          position={[0, -9.195, 0]}
          scale={[0.069, 0.107, 0.069]}
        >
          <meshStandardMaterial color={'#284B70'}/>
        </mesh>
      </group>
    </group>
  );

*/