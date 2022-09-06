import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const rootReducer = combineReducers({
  amountReducer,
});

export default rootReducer;
