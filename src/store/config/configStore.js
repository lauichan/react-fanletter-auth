import fanletter from "../modules/fanletter";
import member from "../modules/member";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: { fanletter, member } });

export default store;
