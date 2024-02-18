import { createSlice } from "@reduxjs/toolkit";

const initialState = "카리나";

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    selectMember: (state, action) => {
      return action.payload;
    },
  },
});

export const { selectMember } = memberSlice.actions;
export default memberSlice.reducer;
