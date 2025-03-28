import { useSelector } from "react-redux";

import MakeupProductBoxOne from "./MakeupProductBoxOne"
import { productSelectors } from "../../store/selectors";

function Quantity(){
    
    
    const product= useSelector(productSelectors.getProduct)
    console.log(product);
    const productList = product?.all || [];
    
    return productList.filter(p=>p.status===true).map((pro)=>(  
    <MakeupProductBoxOne key={pro.id} {...pro}/>
    ))
   
}

export default Quantity 