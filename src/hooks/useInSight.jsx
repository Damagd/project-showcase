import { useState, useMemo, useEffect } from "react";

export function useInSight(ref, path) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const observer = useMemo(() =>
    new IntersectionObserver(([entry]) => 
      setIsIntersecting(entry.isIntersecting), { threshold: 1, }
    ),
  []);

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    }
  }, [ref, observer]);

  useEffect(() => {
    if(!loaded && isIntersecting){
      window.history.pushState({}, '', path)//cambiar url pero no refrescar página
      //evento personalizado para avisar que se cambió pagina
      const navigationEvent = new Event('pushstate');
      window.dispatchEvent(navigationEvent);
      
      setLoaded(true);
    }
  }, [isIntersecting]);

  return isIntersecting;
}