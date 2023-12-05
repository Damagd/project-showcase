import { Construction } from './Construction.jsx'
import { Constructor } from "./Constructor.jsx";
import { Car } from "./Car.jsx";
import { Crane } from "./Crane.jsx";
import { Actor } from './Actor.jsx';
import { Npc } from './Npc.jsx';
import { Sleeper } from './Sleeper.jsx';
import { Suspense } from 'react';
import { Josh } from './Josh.jsx';

export function Actores () {
  return (
    <>
      <Suspense fallback={null}>
        <Construction />
        <Crane></Crane>
      </Suspense>

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

      <Sleeper position={[-44.5,2.8,-21]}>
        <Constructor rotation={[Math.PI * 2,Math.PI / 2,Math.PI/2]} />
      </Sleeper>

      <Sleeper position={[-20.5,38.5,-30]}>
        <Constructor rotation={[Math.PI ,Math.PI / 2,Math.PI/2]} />
      </Sleeper>

      <Sleeper position={[30.5,0.4,-43]}>
        <Constructor rotation={[Math.PI ,Math.PI / 2,Math.PI/2]} />
      </Sleeper>

      <Sleeper position={[21.5,1.5,43]}>
        <Constructor rotation={[Math.PI*2 ,Math.PI / 2,Math.PI/2]} />
      </Sleeper>

      <Sleeper position={[-6,49,34]}>
        <Constructor rotation={[Math.PI*3 ,Math.PI / 2,Math.PI/2]} />
      </Sleeper>

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

      <Npc position={[-50, .9, -41]}
        dialog={[
          "Hello visitor! Sorry for the mess, as you can see we are late with the background, it's taking more time than I thought...",
          "It would be faster if the workers didn't sleep during work...",
          "Hey! Would you do me a favor? Can you help me find the workers that are sleeping? There are hiding somewhere in the construction zone...",
          "They are here somewhere, I can hear their snoring...",
          "Thank you so much for helping me. Did you get your reward?"
        ]}
      >
        <Constructor rotation={[0,Math.PI/3,0]} />
      </Npc>

      <Josh position={[17, 59, 17]}>
        <Constructor />
      </Josh>


    </>
  )
}