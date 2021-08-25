import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { ThemeContextType } from "./ThemeContext";

const ThemeToggle = () => {
  const { isDarkTheme, setIsDarkTheme } =
    useContext<ThemeContextType>(ThemeContext);
  return (
    <button
      onClick={() => {
        setIsDarkTheme(!isDarkTheme);
      }}
    >
      {isDarkTheme ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
