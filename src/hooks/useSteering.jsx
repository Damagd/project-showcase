import { useEffect, useRef, useState } from "react";
import * as Steering from '../utils/steeringMaths.js'

export function useSteering({speed, force = 0.1, radians, points}) {
  const meshRef = useRef();
  const [indexVisited, setIndex] = useState(0);

  var velocity = Steering.Point(0,0,0);
  const maxSpeed = speed;
  const maxForce = force;

  useEffect(() => {
    meshRef.current.geometry.rotateX(radians);
  }, [])

  const updateSteering = () => {
    var index = indexVisited;

    if(index === points.length){
      setIndex(0);
      index = 0;
    }

    let desired = Steering.getDesiredVelocity(points[index], meshRef.current.position);

    //set the magnitude of the vector
    //getting magnitud
    const m = Steering.calculateMagnitude(desired);
    const normalized = Steering.normalize(desired, m);

    //setting to magnitude
    desired = Steering.setMagnitude(normalized, maxSpeed);

    var steeringForce = Steering.getSteeringForce(desired, velocity);
    
    //limiting the force to a maxForce
    steeringForce = Steering.setMaxForce(steeringForce, maxForce);

    //apply force
    //acc add force
    //update
    //velociti add acc
    Steering.addVelocity(velocity,steeringForce);

    //pos add velocty
    meshRef.current.lookAt(points[index].x,points[index].y,points[index].z);
    meshRef.current.position.x += velocity.x;
    meshRef.current.position.y += velocity.y;
    meshRef.current.position.z += velocity.z;

    const limit = Math.sqrt((Math.pow(meshRef.current.position.x - points[index].x,2)) + (Math.pow(meshRef.current.position.y - points[index].y,2)) + (Math.pow(meshRef.current.position.z - points[index].z,2)));

    if(limit <= 1){
      index++;
      setIndex(index);
    }
  }

  return {meshRef, updateSteering}
}