import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fanLetterAPI from "../../apis/fanletter";

const initialState = {
  fanletters: [],
  isLoading: false,
  error: null,
};

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
      .addCase(__getFanLetter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getFanLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(__getFanLetter.fulfilled, (state, action) => {
        state.fanletters = action.payload;
      });
    builder
      .addCase(__addFanLetter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__addFanLetter.rejected, (state) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(__addFanLetter.fulfilled, (state, action) => {
        state.fanletters.push(action.payload);
      });
    builder
      .addCase(__updateFanLetter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__updateFanLetter.rejected, (state) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(__updateFanLetter.fulfilled, (state, action) => {
        state.fanletters = state.fanletters.map((fanletter) =>
          fanletter.id === action.payload.id ? action.payload : fanletter
        );
      });
    builder
      .addCase(__deleteFanLetter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__deleteFanLetter.rejected, (state) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(__deleteFanLetter.fulfilled, (state, action) => {
        state.fanletters = state.fanletters.filter((letter) => letter.id !== action.payload.id);
      });
  },
});

export const { addFanLetter, updateFanLetter, deleteFanLetter } = fanletterSlice.actions;
export default fanletterSlice.reducer;
