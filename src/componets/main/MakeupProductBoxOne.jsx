import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { useState } from "react"

function MakeupProductBoxOne(pro){
 const {t}=useTranslation()

 const [status,setStatus]=useState(true)
    
    return(
        <>
       
        <div className="box1">
        <div className="MakeupProductBoxOne-box">
         <img src={pro.img} alt="concealer"  className="concealer"/>
            <h1 className="name">{pro.name}</h1>
            <div className="MakeupProductBoxOne-box-info">
                <p className="MakeupProductBoxOne-box-info-p">{t("concalerInfo1")}<br/> {t("concalerInfo2")}<br/> {t("concalerInfo3")}</p>
                <p>{pro.price}  /  {pro.quantity}</p>
                <button className={`butt ${pro.status === status ? "butt1":""}`}>Available</button>
            </div>
        </div>
        
        </div>
        </>
    )
}

export default  MakeupProductBoxOne