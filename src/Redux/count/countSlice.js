import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    change_count: (state, action) => {
      state.value = action.payload.count;
    },
  },
});

export const { change_count } = countSlice.actions;

export default countSlice.reducer;
