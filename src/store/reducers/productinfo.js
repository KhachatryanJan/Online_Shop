import product from "../../product/product-info.json"
import { productTypes } from "../types"

function productReducer(state={all:product ,drawable:null },action){
    console.log(state);
    console.log(action.type);

    switch(action.type){
        case productTypes.MAKEUP_PRODUCT:
        return {...state,drawable:action.product}
        default:
            return state
    }
    
    
}

export default productReducer