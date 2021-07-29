import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { GlobalContext } from "../store";

export const Login = () => {
  const { state, dispatch } = useContext(GlobalContext);
  if (!state.isLoaded) dispatch({ type: "LOADSTATE" });
  if (state.isAuth) return <Redirect to="/secrets" />;
  return <div onClick={() => dispatch({ type: "LOGIN" })}>Login</div>;
};
