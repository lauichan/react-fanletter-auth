import fanletter from "../modules/fanletter";
import member from "../modules/member";
import auth from "../modules/auth";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: { fanletter, member, auth } });

export default store;
