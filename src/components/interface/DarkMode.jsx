import { useContext } from 'react';
import './DarkMode.css';
import { OptionsContext } from '../../context/optionsOverlay';
import { DarkModeIcon } from '../icons/DarkModeIcon.jsx';
import { LightModeIcon } from '../icons/LightModeIcon.jsx';

export function DarkMode() {

  const {darkMode, updateDarkMode} = useContext(OptionsContext);

  document.querySelector("body").setAttribute('data-theme', darkMode);
  
  const setDMode = () => {
    updateDarkMode("dark");
  }

  const setLightMode = () => {
    updateDarkMode("light");
  }

  const toggleTheme = (e) => {
    if(e.target.checked)
      setDMode();
    else
      setLightMode();
  }

  return(
    <div className='switch-wrapper'>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} defaultChecked={darkMode === "dark"} />
        <span className="slider">
          <LightModeIcon />
          <DarkModeIcon />
          </span>
      </label>
    </div>
  )
}