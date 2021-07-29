import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { GlobalContext } from "./store";

const ProtectedRoute = ({ children, ...rest }) => {
  const { state } = useContext(GlobalContext);
  const { auth } = state;
  console.log("Protected Route was called");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
