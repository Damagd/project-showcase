import './App.css'
import { Overlay } from './components/interface/Overlay.jsx'
import { useContext } from 'react'
import { DarkMode } from './components/interface/DarkMode.jsx'
import { OptionsContext } from './context/optionsOverlay.jsx'
import { ActivateOverlay } from './components/interface/ActivateOverlay.jsx'
import { AppThreeDe } from './components/scene/AppThreeDe.jsx'
import { OptionsSceneProvider } from './context/optionsScene.jsx'

function App() {
  const {threeDe, overlay, setOverlay} = useContext(OptionsContext);

  const showOverlay = () => {
    setOverlay(true);
  }

  return (
    <>
      <DarkMode/>
      { !overlay && <ActivateOverlay showOverlay={showOverlay} /> }
      { 
        threeDe && 
        <OptionsSceneProvider> 
          <AppThreeDe/> 
        </OptionsSceneProvider> 
      } 
      { overlay && <Overlay /> }
    </>
  )
}

export default App
