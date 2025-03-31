import { Link, Outlet } from "react-router-dom"
import CommitUser from "./CommitUser"
function GoodBadLink(comm){
    return(
        <>
         <div className="good-bad">
                <Link to="good">  <p className="godBad">Good commit</p></Link>
                <Link to="bad" >  <p className="godBad">Bad commit</p></Link>
            </div>
           
            </>
    )
}

export default GoodBadLink