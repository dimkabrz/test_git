import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "authorithation",
  initialState: {
    isAuth: false,
    theme : 'light'
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setTheme:(state, action) => {
      state.theme = action.payload
    }
  },
});

export const { setAuth, setTheme } = toolkitSlice.actions;
export default toolkitSlice.reducer;
