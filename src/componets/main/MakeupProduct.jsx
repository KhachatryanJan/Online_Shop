import { Link, Outlet } from "react-router-dom"
import MakeupProductBoxOne from "./MakeupProductBoxOne"

function MakeupProduct(){
    return(
        <>
        <Link to ="product"> <h1 className="prod">Product</h1></Link> 
        <div className="MakeupProduct">
        <MakeupProductBoxOne/>
       <Outlet/>
        </div>
        </>
    )
}

export default MakeupProduct