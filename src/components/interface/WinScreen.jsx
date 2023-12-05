import './WinScreen.css';
import { DownloadIcon } from '../icons/DownloadIcon.jsx'
import { CloseIcon } from '../icons/CloseIcon.jsx';
import chambeador from '../../assets/chambeador.png';
import { useContext } from "react";
import { OptionsSceneContext } from '../../context/optionsScene.jsx';

export function WinScreen() {
  const {setOpenedWin} = useContext(OptionsSceneContext);

  const handleClose = () => {
    setOpenedWin(false);
  }

  return (
    <div className='win-screen-content fadeIn'>
      <div onClick={handleClose} className="blur-overlay-screen" />
      <section className="win-screen">
        <div className="button-close-holder">
          <button onClick={handleClose} className="button-close"><CloseIcon/></button>
        </div>
        <img src={chambeador} height={'45%'} alt="Image of the price for winning the game (3D model of a constructor made by me)." />
        <p>
          You found them all! Thank you for playing this silly game. <br />
          As a price, I offer you the "Chambeador" trophy (glft model, use it as you want).
        </p>
        <a href='/elchambeador.glb' className="button shower" download>
          Download <DownloadIcon />
        </a>
        <p>It's not much but is honest work</p>
      </section>
    </div>
  );
}