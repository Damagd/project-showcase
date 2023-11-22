import { WatchIcon } from "../icons/WatchIcon"
import { MoreIcon } from "../icons/MoreIcon"

export function Nav({applyBlur, hide}) {

  const claseHide = hide ? ' hide' : '';

  return (
    <nav>
      <div className="message-button">
        <p className={claseHide}>It seems like the background still is under construction</p>

        <button onPointerEnter={applyBlur} onPointerLeave={applyBlur} className="shower">Inspect <WatchIcon /></button>
      </div>

      <a href="#main" className={"pestana-holder" + claseHide}>
        <div className="message-button">
          <p>If you're in a hurry, just skip to check more 
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