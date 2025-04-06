import { Outlet, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import product from "../product/product-info.json"
import { productActions } from "../store/actions"
import "./ProductReviews.css"
function ProductReviews(){
 
    const {id}=useParams()
    const [pro,setPro]=useState({} )
    console.log(pro?.ProductReviews);
    
    const dispatch=useDispatch()

    
 
    useEffect(()=>{
        const FoundProduct=product.find((prod)=>prod.id === id)
        if(FoundProduct)
            setPro(FoundProduct)
        dispatch(productActions.toShowProduct(undefined))
    },[id,dispatch])
  if(pro === undefined){
    return <h1>Product  not Found</h1>
  }
    return(
        <>
      
      <div className="ProductReviews-info">
       <img src={pro.img} alt={pro.name} className="concealer" ></img>
       <div className="pp">
         <p className="p-name">{pro.name}</p>
         {pro.ProductReviews && pro.ProductReviews.length > 0 ? (
          pro.ProductReviews.map((review, index) => (
            <p key={index} className="review">{review}</p>
          ))
        ) : (
          <p>No reviews yet</p>  
        )}
         </div>
     </div>
      
       </>
    )
}

export default ProductReviews


