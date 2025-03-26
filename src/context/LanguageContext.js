import { createContext ,useState} from "react";



export const LanguageContexte = createContext()

const LanguageProvider=({ children })=>{
    const [lang,setLang]=useState("en")
     return(
        <LanguageContexte.Provider value={{lang, setLang}}>
            {children}
        </LanguageContexte.Provider>
     )
}

export default LanguageProvider