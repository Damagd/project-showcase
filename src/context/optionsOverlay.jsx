import { createContext, useState } from "react";

export const OptionsContext = createContext();

export function OptionsProvider ({children}) {
  const selectedTheme = localStorage.getItem("selectedTheme");

  const [overlay, setOverlay] = useState(true);
  const [threeDe, setThreeDe] = useState(true);
  const [darkMode, setDarkMode] = useState(selectedTheme);

  const updateDarkMode = (theme) => {
    document.querySelector("body").setAttribute('data-theme', theme);
    localStorage.setItem("selectedTheme", theme);
    setDarkMode(theme);
  }


  return (
    <OptionsContext.Provider value={{
      overlay, setOverlay,
      threeDe, setThreeDe,
      darkMode, updateDarkMode
    }}
    >
      {children}
    </OptionsContext.Provider>
  )
}