// We import createContext from react.
import { createContext, useState } from 'react';

// We initialise our context, and set the initial-/ default value to "null".
const LanguageContext = createContext(null);

function LanguageProvider(props){
    const [language, setLanguage] = useState("DE")

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
        {props.children}
        </LanguageContext.Provider>
    )
}
// We export our new context.
export { LanguageContext, LanguageProvider }