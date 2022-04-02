import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./text-slice";

const store = configureStore({ reducer: { text: textSlice.reducer } });
export default store;
