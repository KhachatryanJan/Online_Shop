import { commitTypes } from "../types";

function getToCommit(id){
    return{
        type:commitTypes.CUSTOMER_COMMENT,
        commit:{
            id
        }
    }
}

export {getToCommit}