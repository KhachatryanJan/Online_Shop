
import {  Outlet } from "react-router-dom";
import "./opinnionsPage.css"
import CommitUser from "./CommitUser";
import GoodBadLink from "./GoodBadLink";
function OpinnionsPage(){

    return (
        <>
        
            <h1 className="CommetPages">Commet pages  abaut the site</h1>
          
            <GoodBadLink/>
            <Outlet/>
        </>
    )
}



export default OpinnionsPage