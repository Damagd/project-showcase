export const Point = (x, y ,z) => ({
  x: x,
  y: y,
  z: z,
});

export function getDesiredVelocity(destination, position){
 return Point((destination.x - position.x), (destination.y - position.y), (destination.z - position.z));
}

export function calculateMagnitude({x,y,z}){
  return Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2));
}

export function normalize(point, magnitude){
  return Point(point.x/magnitude, point.y/magnitude, point.z/magnitude)
}

export function setMagnitude(point, maxSpeed){
  return Point(point.x * maxSpeed, point.y * maxSpeed, point.z * maxSpeed);
}

export function getSteeringForce(desired, velocity){
  return Point(desired.x - velocity.x, desired.y - velocity.y, desired.z - velocity.z);
}

export function setMaxForce(steeringForce, maxForce){
 return Point(
  steeringForce.x > maxForce ? maxForce : steeringForce.x,
  steeringForce.y > maxForce ? maxForce : steeringForce.y,
  steeringForce.z > maxForce ? maxForce : steeringForce.z
 );
}

export function addVelocity(velocity, steeringForce){
    const acc = Point(0,0,0);

    //apply force
    //acc add force
    acc.x += steeringForce.x;
    acc.y += steeringForce.y;
    acc.z += steeringForce.z; 
    
    //update
    //velociti add acc
    velocity.x += acc.x;
    velocity.y += acc.y;
    velocity.z += acc.z;
}