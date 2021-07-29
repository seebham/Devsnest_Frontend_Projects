import React, { useReducer } from "react";

//Gobal initialState
export const initialState = {
  isLoaded: false,
  isAuth: false,
  theme: {
    light: { background: "#fff" },
    dark: { background: "#111" },
  },
};

//Global Context
export const GlobalContext = React.createContext();

//Global Reducer
const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADSTATE":
      console.log("loaded");
      return { ...state, isLoaded: true };
    case "LOGIN":
      console.log("logged in");
      return { ...state, isAuth: true };
    case "LOGOUT":
      console.log("logged out");
      return { ...state, isAuth: false };
    default:
      return state;
  }
};

//GlobalContext Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
