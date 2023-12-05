import { Html } from "@react-three/drei";
import { SandwichIcon } from "../icons/SandwichIcon";

function openDialog(dialog) {
  const dialogEvent = new CustomEvent('opendialog', {detail: dialog});
  window.dispatchEvent(dialogEvent);
}

export function Josh({children, position, dialog = ['¿Quieres un sandwich?']}) {

  const handleClick = () => {
    const dialogEvent = new CustomEvent('opendialog', {detail: dialog});
    window.dispatchEvent(dialogEvent);
  }

  return (
    <group position={position}onClick={handleClick}>
      {children}
      <Html occlude transform distanceFactor={2} position={[0,2,0]}>
        <SandwichIcon />
      </Html>
    </group>
  );
}