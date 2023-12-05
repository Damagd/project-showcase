import { createContext, useState } from "react";

export const OptionsSceneContext = createContext();

export function OptionsSceneProvider ({children}) {
  const [sleepers, setSleepers] = useState(0);
  const [isInMission, setIsInMission] = useState(false);
  const [isMissionFinished, setIsMissionFinished] = useState(false);
  const [openedWin, setOpenedWin] = useState(false);

  const startMission = () => {
    if (isMissionFinished) {
      setOpenedWin(true);
      return;
    }
    if(!isInMission && sleepers < 5 && !isMissionFinished){
      setIsInMission(true);
    }
  }

  const updateSleeper = () => {
    if(!isInMission || isMissionFinished) return;

    const points = sleepers + 1;
    if(points === 5) {
      setIsMissionFinished(true);
      setSleepers(points);
      setOpenedWin(true);
    } else {
      setSleepers(points);
    }
  }

  return (
    <OptionsSceneContext.Provider value={{
      sleepers, startMission, isInMission,
      updateSleeper, isMissionFinished,
      openedWin, setOpenedWin
    }}>
      {children}
    </OptionsSceneContext.Provider>
  );
}