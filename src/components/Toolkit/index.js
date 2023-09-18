import { configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./ToolkitSlice";

export const store = configureStore({
  reducer: {
    authorithation: toolkitSlice,
  },
});

export default store;
