import { useTranslation } from "react-i18next"


function Motto(){
    const {t}=useTranslation()
    return(
        <>
        <div className="motto">
            <p>{t("YourMakeupYourMagic!")}</p>
            <p>{t("GlowUpGirl!")}</p>
        </div>
    
        </>
    )
}

export default Motto