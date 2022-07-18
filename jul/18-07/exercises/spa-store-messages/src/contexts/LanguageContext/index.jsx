import { createContext, useState } from "react";

// 1. we create a context using the createContext
export const LanguageContext = createContext();

// 2. we pass as value to our context provider the values that we
// want to be accessible to our child components
export function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("german");

  return (
    <LanguageContext.Provider
      value={{
        language: language,
        setLanguage: setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
