import { Construction } from './Construction.jsx'
import { Constructor } from "./Constructor.jsx";
import { Car } from "./Car.jsx";
import { Crane } from "./Crane.jsx";

export function Actores () {
  return (
    <>
      <Construction />
      <Crane></Crane>
      <Constructor></Constructor>
      <Car></Car>
    </>
  )
}