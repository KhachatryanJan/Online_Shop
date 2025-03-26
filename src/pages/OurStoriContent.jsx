import email from "../images/email-svgrepo-com.svg"
import insta from "../images/instagram-1-svgrepo-com.svg"
import face from "../images/facebook-color-svgrepo-com.svg"
function OurStoriContent(){
    return(
        <>
        <div className="email-p">
        <img src={email} alt="email" className="my-email" />
        <p className="email-p-info">Email@19.com</p>
        </div>
        <div className="insta-p-face">
            <div className="insta_face">
            <img src={insta} alt="insta" className="inst-face" />
            <img src={face} alt="face" className="inst-face"  />
            </div>
            <p className="inst-face-name">jhannakhachatryan</p>
        </div>
        </>
    )
}

export default OurStoriContent