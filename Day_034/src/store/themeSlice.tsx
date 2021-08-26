import { createSlice } from "@reduxjs/toolkit";

export interface ThemeStateTypes {
  isDark: boolean;
}

const initialState: ThemeStateTypes = {
  isDark: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state: ThemeStateTypes) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
