import { useTranslation } from "react-i18next"
import GirlPhoto from "./GirlPhoto"

function GirlBox(){
    const {t}=useTranslation()
    return(
        <>
       
        <div className="Product-box">
        <h2 className="Product">{t("Makeup")}</h2>
        <div className="pro">
            <GirlPhoto/>
           
        </div>
        </div>
        </>  
    )
}

export default GirlBox