import React, { useReducer } from "react";

//Gobal initialState
export const initialState = {
  auth: {
    isLoaded: false,
    isAuth: false,
    authObj: null,
  },
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
    case "LOGIN":
      console.log("logged in");
      return { ...state, auth: { isAuth: true, isLoaded: true } };
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
