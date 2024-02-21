import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../../apis/auth";
import fanLetterAPI from "../../apis/fanletter";

const initialState = {
  user: {
    accessToken: localStorage.getItem("accessToken"),
    userId: localStorage.getItem("userId"),
    avatar: localStorage.getItem("avatar") ?? "",
    nickname: localStorage.getItem("nickname"),
  },
  isLoading: false,
  isError: false,
  error: null,
};

export const __logIn = createAsyncThunk("auth/login", async (payload, thunkAPI) => {
  try {
    const { data } = await authAPI.post("/login?expiresIn=1m", payload);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __register = createAsyncThunk("auth/register", async (payload, thunkAPI) => {
  try {
    const { data } = await authAPI.post("/register", payload);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __setUser = createAsyncThunk("auth/setUser", async (payload, thunkAPI) => {
  try {
    const { data } = await authAPI.patch("/profile", payload);
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
        state.isError = false;
      })
      .addCase(__logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload.response.data.message;
      })
      .addCase(__logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.user = action.payload;
      });
    builder
      .addCase(__register.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload.response.data.message;
      })
      .addCase(__register.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
      });
    builder
      .addCase(__setUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__setUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload.response.data.message;
      })
      .addCase(__setUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        console.log("aaaaa", action.payload);
        if (action.payload.avatar) {
          state.user.avatar = action.payload.avatar;
        }
        if (action.payload.nickname) {
          state.user.nickname = action.payload.nickname;
        }
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
