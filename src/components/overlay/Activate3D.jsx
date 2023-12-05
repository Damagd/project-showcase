import { useContext } from "react"
import { OptionsContext } from "../../context/optionsOverlay";

export function Activate3D({className}) {
  const {threeDe, setThreeDe} = useContext(OptionsContext);

  const handleClick = () => {
    setThreeDe(!threeDe);
  }

  return (
    <button className={"overlay-button three-d-button " + className + " fadeIn"} onClick={handleClick}>
      { 
        threeDe 
        ? <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="48px" viewBox="0 0 24 24"><path fill="currentColor" d="m2.61 2l18.74 18.74l-1.41 1.41L14.8 17H13v-1.8l-2-1.97v1.98c-.07.47-.26.87-.59 1.2c-.33.32-.73.52-1.2.59H5v-2h4v-2H6v-2h2.8L6.79 9H5V7.23L1.2 3.41L2.61 2M16 7h.22c.78.07 1.41.36 1.92.88c.51.51.79 1.12.86 1.88v4.48c-.05.39-.13.76-.28 1.06L17 13.6V9.85c-.05-.22-.16-.41-.31-.57c-.16-.15-.35-.25-.57-.28H15v2.59l-2-2.02V7h3Z"/></svg>
        : <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="48px" viewBox="0 0 24 24"><path fill="currentColor" d="M5 7h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5v-2h4v-2H6v-2h3V9H5V7m8 0h3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3V7m3 8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v6h1Z"/></svg> 
      }
    </button>
  )
}