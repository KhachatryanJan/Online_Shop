import { combineReducers } from "redux";
import productReducer from "./productinfo";

const reducers=combineReducers(
    {
        product:productReducer
    }
)

export default reducers