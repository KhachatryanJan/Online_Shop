import inst from "../../images/instagram-1-svgrepo-com.svg"
import fase  from "../../images/facebook-color-svgrepo-com.svg"
import phon from "../../images/phone-calling-svgrepo-com.svg"
import email from "../../images/email-svgrepo-com.svg"

function IconContent() {
    return (
        <>
            <div className="icon">
               <img src={inst } alt="inst "/>
               <img src={fase } alt="fase "/>
               <img src={phon} alt="phon"/>
               <img src={email } alt="email "/>
            </div></>
    )
}

export default IconContent