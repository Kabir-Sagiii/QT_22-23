import { legacy_createStore } from "redux";
import myReducer from "./reducer";

let myStore = legacy_createStore(myReducer);

export default myStore;
