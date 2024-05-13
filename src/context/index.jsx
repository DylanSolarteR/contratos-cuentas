"use client";
import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [daltonismo, setDaltonismo] = useState("normal");

  return (
    <AppContext.Provider
      value={{
        daltonismo,
        setDaltonismo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
