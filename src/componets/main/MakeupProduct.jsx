import { Link, Outlet } from "react-router-dom"
import MakeupProductBoxOne from "./MakeupProductBoxOne"
import { useTranslation } from "react-i18next"
function MakeupProduct(){
    const {t}=useTranslation()
    return(
        <>
        <div className="pro-finpro">
        <Link to ="product"> <h1 className="prod">{t("Product")}</h1></Link> 
        <Link to="FinProduct" ><h1 className="prod"> {t("FinishedProduct")}</h1></Link>
        </div>
        <div className="MakeupProduct">
        <Outlet/>
        </div>
        </>
    )
}

export default MakeupProduct