import { useContext } from "react"
import { OptionsSceneContext } from "../../context/optionsScene"
import { OptionsContext } from "../../context/optionsOverlay";

import sleeper from "../../assets/sleeper.png";

import './CountSleepers.css';

export function CountSleepers() {
  const {sleepers, isInMission} = useContext(OptionsSceneContext);
  const {overlay} = useContext(OptionsContext);

  return (
    <>
      {
        isInMission && !overlay &&
        <div className="overlay-button count-sleepers">
          <aside>
            <img src={sleeper} width={'100%'} alt="representation of a worker sleeping in the middle of the work" />
          </aside>
          <span>{sleepers}/5</span>
        </div>
      }
    </>
  )
}