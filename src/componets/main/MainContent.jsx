import Motto from "./motto"
import GirlBox from "./GirlBox"
import Product from "./Product"
import "./MainContent.css"
import { Outlet, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { getPro } from "../../store/selectors/prosuctSelectors"
import { useEffect } from "react"

function MainContent(){
    const {id}=useSelector(getPro)
    const r=useNavigate()
    useEffect(()=>{
        if(id) r(`/product-rev/${id}`)
    })
    return(
        <div className="MainContent">
        <Motto/>
        <GirlBox/>
        <Product/>
       
        </div>
    )
}

export default MainContent