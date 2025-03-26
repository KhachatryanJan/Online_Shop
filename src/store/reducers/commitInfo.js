import commit from "../../opinnions/opinnions.json"
import { commitTypes } from "../types"

function commentReducer(state={all:commit,drawable:null},action){
    console.log(state);
    

    switch(action.type){
        case commitTypes.CUSTOMER_COMMENT:
            return{...state,drawable:action.commit }
        default:
            return state
    }
    
}

export default commentReducer