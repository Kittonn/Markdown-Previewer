import { createSlice } from "@reduxjs/toolkit";
import { startText } from "../startText";
const textSlice = createSlice({
  name: "text",
  initialState: { text: startText },
  reducers: {
    newText(state, action) {
      state.text = action.payload;
    },
  },
});

export const textActions = textSlice.actions;
export default textSlice;
