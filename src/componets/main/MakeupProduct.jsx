import { Link } from "react-router-dom"
import MakeupProductBoxOne from "./MakeupProductBoxOne"

function MakeupProduct(){
    return(
        <>
        <Link to ="product"> <h1 className="prod">Product</h1></Link> 
        <div className="MakeupProduct">
        
        <MakeupProductBoxOne/>
        </div>
        </>
    )
}

export default MakeupProduct