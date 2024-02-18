import { combineReducers, createStore } from "redux";
import fanletter from "../modules/fanletter";
import member from "../modules/member";

const rootReduceer = combineReducers({ fanletter, member });
const store = createStore(rootReduceer);

export default store;
