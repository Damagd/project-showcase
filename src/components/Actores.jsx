import { Construction } from './Construction.jsx'
import { Constructor } from "./Constructor.jsx";
import { Car } from "./Car.jsx";
import { Crane } from "./Crane.jsx";
import { Actor } from './Actor.jsx';

export function Actores () {
  return (
    <>
      <Construction />
      <Crane></Crane>

      <Actor 
      position={[-18, 36.5, -7]}
      points={[
        {x: -18.48, y: 36.6, z: -7.5},
        {x: 27, y: 36.6, z: -12.5},
        {x: -7.2, y: 36.6, z: 19},
        {x: -11.7, y: 36.6, z: 19.5},
        {x: -15.45, y: 36.6, z: 3},
        {x: -15, y: 36.6, z: -9},
      ]}>
        <Constructor isWalking={true} />
      </Actor>

      <Actor 
      position={[7.5, .9, -16.7]}
      points={[
        {x: 7.4, y: 1, z: -16.8},
        {x: 15.7, y: 1, z: -15.7},
      ]}>
        <Constructor isWalking={true} />
      </Actor>

      <Actor 
      position={[-30, .9, -43.7]}
      points={[
        {x: -30.1, y: 1, z: -43.6},
        {x: -35, y: 1, z: -43.8},
        {x: -45, y: 1, z: -25.5},
      ]}>
        <Constructor isWalking={true} />
      </Actor>

      <Constructor position={[-44.5,2.8,-21]} rotation={[Math.PI * 2,Math.PI / 2,Math.PI/2]} />

      <Actor 
        position={[-36, 0, 3]}
        points={[
          {x: -37, y: 0, z: 2}, 
          {x: -33.5, y: 0, z: -22.4}, 
          {x: 59.8, y: 0, z: -22.4}, 
          {x: 59.8, y: 0, z: 58.5}, 
          {x: -36.35, y: 0, z: 58.5},
          {x: -36.35, y: 0, z: 45.4}, 
          {x: -36.38, y: 2.5, z: 23.7},
        ]}
        speed={0.2}
      >
        <Car></Car>
      </Actor>


    </>
  )
}