import Motto from "./motto"
import GirlBox from "./GirlBox"
import Product from "./Product"
import "./MainContent.css"

function MainContent(){
    return(
        <div className="MainContent">
        <Motto/>
        <GirlBox/>
        <Product/>
        </div>
    )
}

export default MainContent