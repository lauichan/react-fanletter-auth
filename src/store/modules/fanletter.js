import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fanLetterAPI from "../../apis/fanletter";

const initialState = [];

export const __getFanLetter = createAsyncThunk("fanletter/get", async (payload, thunkAPI) => {
  try {
    const { data } = await fanLetterAPI.get("/fanletter");
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __addFanLetter = createAsyncThunk("fanletter/add", async (payload, thunkAPI) => {
  try {
    const { data } = await fanLetterAPI.post("/fanletter", payload);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __updateFanLetter = createAsyncThunk("fanletter/update", async (payload, thunkAPI) => {
  try {
    const { data } = await fanLetterAPI.patch(`/fanletter/${payload.id}`, payload);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteFanLetter = createAsyncThunk("fanletter/delete", async (payload, thunkAPI) => {
  try {
    const { data } = await fanLetterAPI.delete(`/fanletter/${payload}`);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const fanletterSlice = createSlice({
  name: "fanletter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getFanLetter.pending, (state) => {})
      .addCase(__getFanLetter.rejected, (state) => {})
      .addCase(__getFanLetter.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(__addFanLetter.pending, (state) => {})
      .addCase(__addFanLetter.rejected, (state) => {})
      .addCase(__addFanLetter.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(__updateFanLetter.pending, (state) => {})
      .addCase(__updateFanLetter.rejected, (state) => {})
      .addCase(__updateFanLetter.fulfilled, (state, action) => {
        return state.map((letter) => (letter.id === action.payload.id ? action.payload : letter));
      })
      .addCase(__deleteFanLetter.pending, (state) => {})
      .addCase(__deleteFanLetter.rejected, (state) => {})
      .addCase(__deleteFanLetter.fulfilled, (state, action) => {
        console.log(state, action);
        return state.filter((letter) => letter.id !== action.payload.id);
      });
  },
});

export const { addFanLetter, updateFanLetter, deleteFanLetter } = fanletterSlice.actions;
export default fanletterSlice.reducer;
