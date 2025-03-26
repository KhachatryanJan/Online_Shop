import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"


function MakeupProductBoxOne(pro){
 const {t}=useTranslation()
    
    return(
        <>
        <div className="box1">
        <div className="MakeupProductBoxOne-box">
         <Link to="/Opinnions"> <img src={pro.img} alt="concealer"  className="concealer"/></Link>  
            <h1 className="name">{pro.name}</h1>
            <div className="MakeupProductBoxOne-box-info">
                <p className="MakeupProductBoxOne-box-info-p">{t("concalerInfo1")}<br/> {t("concalerInfo2")}<br/> {t("concalerInfo3")}</p>
                <p>{pro.price}  /  {pro.quantity}</p>
                <button>Available</button>
            </div>
        </div>
        
        </div>
        </>
    )
}

export default  MakeupProductBoxOne