import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../../apis/auth";

const initialState = {
  user: {
    accessToken: localStorage.getItem("accessToken"),
    userId: localStorage.getItem("userId"),
    avatar: localStorage.getItem("avatar"),
    nickname: localStorage.getItem("nickname"),
  },
  isLoading: false,
  error: null,
};

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
    logOut: (state, action) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__logIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.response.data.message;
      })
      .addCase(__logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
