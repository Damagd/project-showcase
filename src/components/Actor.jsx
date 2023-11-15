import { useSteering } from "../hooks/useSteering";
import { useFrame } from "@react-three/fiber";

export function Actor({position, points, children, speed = 0.1, rotationX, rotationY, rotationZ}) {
  const {meshRef, updateSteering} = useSteering({
    speed: speed,
    radians: Math.PI * 0.5,
    points: points
  });

  useFrame(() => {
    updateSteering();
  })

  return (
    <mesh ref={meshRef} position={position}>
      {children}
    </mesh>
  )
}