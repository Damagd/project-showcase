import { Titulo } from "../overlay/Titulo"
import { Nav } from "../overlay/Nav"
import { useRef, useState } from "react"
import { Information } from "../overlay/Information";

export function Overlay() {
  const [deblured, setDeblured] = useState(false);
  const header = useRef();
  const cBlur = 'portada' + (!deblured ? '' : ' deblured');

  const applyBlur = () => {
    if(header.current.className.includes('deblured'))
      setDeblured(false);
    else
      setDeblured(true);
  }

  return(
    <>
      <header ref={header} className={cBlur}>
        <Titulo hide={deblured}/>
        <Nav hide={deblured} applyBlur={applyBlur} />
      </header>
      <main id="main">
        <Information />
      </main>
    </>

  )
}