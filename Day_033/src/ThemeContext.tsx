import { createContext } from "react";

export interface ThemeContextType {
  isDarkTheme: boolean;
  setIsDarkTheme: (theme: boolean) => void;
}

const initialState: ThemeContextType = {
  isDarkTheme: false,
  setIsDarkTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(initialState);

export default ThemeContext;
