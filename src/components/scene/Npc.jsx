import { useContext, useRef } from "react";
import { Html } from "@react-three/drei";
import { DialogIcon} from "../icons/DialogIcon.jsx"
import { OptionsSceneContext } from "../../context/optionsScene.jsx";

function openDialog(dialog) {
  const dialogEvent = new CustomEvent('opendialog', {detail: dialog});
  window.dispatchEvent(dialogEvent);
}

export function Npc({children, position, dialog = ['I AM AN ERROR']}) {
  const {startMission, isMissionFinished, isInMission} = useContext(OptionsSceneContext);
  const meshRef = useRef(null);

  const handleClick = () => {
    let dialogs;
    
    if(isMissionFinished) 
      dialogs = [dialog[4]];
    else if(isInMission)
      dialogs = [dialog[3]];
    else
      dialogs = [dialog[0], dialog[1], dialog[2]];

    openDialog(dialogs);
    meshRef.current.lookAt(-47,0,-47);

    //for now this npc just accepts one mission
    startMission();
  }

  return (
    <group position={position} ref={meshRef} onClick={handleClick}>
      {children}
      <Html occlude distanceFactor={2} position={[0,2,0]}>
        <DialogIcon />
      </Html>
    </group>
  );
}