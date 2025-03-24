
import { productTypes } from "../types";

function toShowProduct(id){
    return{
        type:productTypes.MAKEUP_PRODUCT,
        product:{
            id
        }
    }
}

export {toShowProduct}