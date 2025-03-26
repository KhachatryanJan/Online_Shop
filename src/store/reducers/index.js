import { combineReducers } from "redux";
import productReducer from "./productinfo";
import commentReducer from "./commitInfo";
const reducers=combineReducers(
    {
        product:productReducer,
        commit:commentReducer
    }
)

export default reducers