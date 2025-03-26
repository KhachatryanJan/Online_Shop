
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"


function ShopOurStori(){
    const {t}=useTranslation()
    return(
        <div className="ShopOurStori">
        <Link to="/Opinnions"> <div className="shop">Opinnions</div></Link>
         <Link to="/OurStori"><div className="our_stori">{t("OurStori")}</div></Link>
        </div>
    )
}

export default ShopOurStori