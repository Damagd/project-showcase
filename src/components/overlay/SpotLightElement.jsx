import { useRef, useState } from "react";

import './SpotLightElement.css';

export function SpotLightElement ({ color, children }) {
  const elementRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x:0 , y:0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if(!elementRef.current || isFocused) return;

    const element = elementRef.current;
    const rect = element.getBoundingClientRect();

    setPosition({x: e.clientX - rect.left, y: e.clientY - rect.top});
  }

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  }

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  }

  const handleMouseEnter = () => {
    setOpacity(1);
  }

  const handleMouseLeave = () => {
    setOpacity(0);
  }
  
  return (
    <div 
    onMouseMove={handleMouseMove}
    onFocus={handleFocus}
    onBlur={handleBlur}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave} 
    className="spotborder-wrapper">
      {children}
      <div 
      ref={elementRef}
      style={{
        border: "2.5px solid var(--blanco_stroke_color)",
        opacity,
        WebkitMaskImage: `radial-gradient(80% 150px at ${position.x}px ${position.y}px, black 45%, transparent)`,
      }}
      aria-hidden="true"
      className="overlay-element"
      >
      </div>
    </div>
  )
}