import { Canvas } from '@react-three/fiber'
import { Scene } from './Scene.jsx'
import { Suspense } from 'react'
import { ActorDialog } from '../interface/ActorDialog.jsx'
import { CountSleepers } from '../interface/CountSleepers.jsx'
import { OptionsContext } from '../../context/optionsOverlay.jsx'
import { WinScreen } from '../interface/WinScreen.jsx'
import { useContext } from 'react'
import { OptionsSceneContext } from '../../context/optionsScene.jsx'

export function AppThreeDe() {
  const {overlay} = useContext(OptionsContext);
  const {openedWin} = useContext(OptionsSceneContext);
  return (
    <>
      <ActorDialog />
      <CountSleepers />
      <Suspense>
        <Canvas frameloop={overlay ? "demand" : "always"} style={{position: 'fixed'}} shadows camera={{position: [-60, 0, -60], fov: 60}}>
          <Scene></Scene>
        </Canvas>
      </Suspense>
      {openedWin && <WinScreen />}
    </>
  );
}