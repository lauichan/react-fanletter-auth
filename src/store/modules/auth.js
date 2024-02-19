import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../../apis/auth";

const initialState = null;

export const __logIn = createAsyncThunk("auth/login", async (payload, thunkAPI) => {
  try {
    const { data } = await authAPI.post("/login?expiresIn=10m", payload);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state, action) {
      return null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__logIn.pending, (state) => {})
      .addCase(__logIn.rejected, (state) => {})
      .addCase(__logIn.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
