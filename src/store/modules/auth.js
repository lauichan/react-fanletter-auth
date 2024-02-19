import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      return action.payload;
    },
    logOut: (state, action) => {
      return null;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
