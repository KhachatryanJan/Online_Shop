import { useTranslation } from "react-i18next"
import { Link, Outlet } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { productActions } from "../../store/actions"

function MakeupProductBoxOne(pro) {
   
    const { t } = useTranslation()
    const dispatch = useDispatch()

    

    return (
        <>

        <div className="box1">
                <div className="MakeupProductBoxOne-box">
                    <img src={pro.img} alt="img" className="concealer" />
                    <h1 className="name">{pro.name}</h1>
                    <div className="MakeupProductBoxOne-box-info">
                        <p className="MakeupProductBoxOne-box-info-p">{pro.infoProduct}</p>
                        <p>{pro.price}  /  {pro.quantity}</p>
                        
                        <button
                        className={`butt ${ pro.status ? "butt1" : ""}`}
                        onClick={() => dispatch(productActions.toShowProduct(pro.id))}
                    >
                        {pro.status ? t("Available") : t("OutStock")}
                    </button>
                    </div>

                </div>

            </div>
       
        </>
    )
}

export default MakeupProductBoxOne