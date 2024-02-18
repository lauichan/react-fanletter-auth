import { createSlice } from "@reduxjs/toolkit";
import { fanLetters } from "../../static/data";

const initialState = fanLetters;

const fanletterSlice = createSlice({
  name: "fanletter",
  initialState,
  reducers: {
    addFanLetter: (state, action) => {
      return [...state, action.payload];
    },
    updateFanLetter: (state, action) => {
      return state.map((letter) => (letter.id === action.payload.id ? action.payload : letter));
    },
    deleteFanLetter: (state, action) => {
      return state.filter((letter) => letter.id !== action.payload);
    },
  },
});

export const { addFanLetter, updateFanLetter, deleteFanLetter } = fanletterSlice.actions;
export default fanletterSlice.reducer;
