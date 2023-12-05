import { useContext, useState } from "react";
import { OptionsSceneContext } from "../../context/optionsScene";
import { Html } from "@react-three/drei";
import { SleepIcon } from "../icons/SleepIcon";

export function Sleeper({ children, position }) {
  const [isSleep, setIsSleep] = useState(true);
  const {updateSleeper, isInMission} = useContext(OptionsSceneContext);

  const handleWakeUp = () => {
    if(!isSleep || !isInMission)
      return;

    setIsSleep(false);
    updateSleeper();
  }

  return (
    <group position={position} onClick={handleWakeUp}>
      {
        isSleep && isInMission &&
        <Html distanceFactor={2} position={[0,1,0]}>
          <SleepIcon />
        </Html>
      }
      {children}
    </group>
  );
}