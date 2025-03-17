import Motto from "./motto"
import Product from "./Product"
import "./MainContent.css"
function MainContent(){
    return(
        <div className="MainContent">
        <Motto/>
        <Product/>
        </div>
    )
}

export default MainContent