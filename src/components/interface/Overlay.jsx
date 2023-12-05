import { Titulo } from "../overlay/Titulo"
import { Nav } from "../overlay/Nav"
import { useRef, useState } from "react"
import { Information } from "../overlay/Information";
import { Modal } from "../overlay/Modal";
import { Activate3D } from "../overlay/Activate3D";

export function Overlay() {
  const [deblured, setDeblured] = useState(false);
  const header = useRef();
  const cBlur = 'portada' + (!deblured ? '' : ' deblured');

  const applyBlur = () => {
    setDeblured(true);   
  }

  const removeBlur = () => {
    setDeblured(false);
  }

  return(
    <>
      <Activate3D className={deblured ? 'hide' : ''}/>
      <div className={"blur-overlay-screen " + (deblured ? 'deblured' : '')}></div>
      <Modal />
      <header ref={header} className={cBlur + ' fadeIn'}>
        <Titulo hide={deblured}/>
        <Nav hide={deblured} applyBlur={applyBlur} removeBlur={removeBlur} />
      </header>
      <main id="main">
        <Information />
      </main>

    </>

  )
}