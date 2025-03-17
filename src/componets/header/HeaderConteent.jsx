
import ShopOurStori from "./ShopOurStori"
import ShopLogo from "./ShopLogo"
import MainContent from "../main/MainContent"
import Languages from "./Languages"
import "./HeaderConteent.css"
function HeaderContent(){
    return(
        <>
        <div className="HeaderContent">
            <ShopLogo/>
           <ShopOurStori/>
           <Languages/>
        </div>
       
    </>
    )
}

export default HeaderContent