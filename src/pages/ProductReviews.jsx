import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import product from "../product/product-info.json"
import { productActions } from "../store/actions"
function ProductReviews(){
    const {id}=useParams()
    const [pro,setPro]=useState({})
    console.log(pro)
    
    const dispatch=useDispatch()

    useEffect(()=>{
        const FoundProduct=product.find((prod)=>prod.id === id)
        if(FoundProduct)
            setPro(FoundProduct)
        dispatch(productActions.toShowProduct(undefined))
    },[id])
  if(pro === undefined){
    return <h1>Product  not Found</h1>
  }
    return(
        <>
      
      <div>
         <p>{pro.img}</p>
         <p>{pro.name}</p>
         <p>{pro.ProductReviews}</p>
     </div>

      
        </>
    )
}

export default ProductReviews