import { WatchIcon } from "../icons/WatchIcon"
import { MoreIcon } from "../icons/MoreIcon"
import { useContext } from "react";
import { OptionsContext } from "../../context/optionsOverlay";

export function Nav({applyBlur, removeBlur, hide}) {

  const claseHide = hide ? ' hide' : '';
  const {overlay, setOverlay} = useContext(OptionsContext);

  const handleOverlay = () => {
    setOverlay(!overlay);
  }

  return (
    <nav>
      <div className="message-button">
        <p className={claseHide}>
          It seems like the background is still<br />
          under construction 👷‍♀️
        </p>

        <button onClick={handleOverlay} onPointerEnter={applyBlur} onPointerLeave={removeBlur} className="shower">Inspect <WatchIcon /></button>
      </div>

      <a href="#main" className={"pestana-holder" + claseHide}>
        <div className="message-button">
          <p>If you're in a hurry, just skip and check more 
            <br /> 
            about <strong>me</strong> and my <strong>projects</strong>.
          </p>
          <div className="pestana">
            <MoreIcon />
          </div>
        </div>
      </a>
    </nav>

  )
}