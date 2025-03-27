
import { Link } from "react-router-dom";
import "./opinnionsPage.css"
function OpinnionsPage({name,lastName,comment}){

    console.log({name,lastName,comment});
    
    return(
        <>
        <h1>Commet pages  abaut the site</h1>
        <div className="good-bad"> 
    <Link to="good">  <p>Good commit</p></Link>  
    <Link to="bad"  >  <p>bad commit</p></Link>
        </div>
         <div>
          <p>{name}  {lastName}</p>
          <p>{comment}</p>
         </div>
        </>
    )
}



export default OpinnionsPage