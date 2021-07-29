import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../store";
import { Redirect } from "react-router";

export const Login = () => {
  const { dispatch } = useContext(GlobalContext);
  return <div onClick={() => dispatch({ type: "LOGIN" })}>Login</div>;
};
