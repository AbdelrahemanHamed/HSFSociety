/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export let Context = createContext("");
export function ContextProvider({ children }) {
  let [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Context.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </Context.Provider>
  );
}
