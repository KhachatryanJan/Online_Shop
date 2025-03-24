import { useSelector } from "react-redux";

import MakeupProductBoxOne from "./MakeupProductBoxOne"
import { productSelectors } from "../../store/selectors";

function Quantity(){
    
    
    const product= useSelector(productSelectors.getProduct)
    console.log(product);
    
    return product.filter(p=>parseFloat(p.price)=== 20.00).map((pro)=>(  
    <MakeupProductBoxOne key={pro.id} {...pro}/>
    ))
   
}

export default Quantity 