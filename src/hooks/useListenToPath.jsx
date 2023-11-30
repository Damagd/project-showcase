import { useEffect, useState } from "react";

export function useListenToPath() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener('pushstate', onLocationChange);
    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('pushstate', onLocationChange);
      window.removeEventListener('popstate', onLocationChange);
    }
    
  }, []);

  return {currentPath};
}