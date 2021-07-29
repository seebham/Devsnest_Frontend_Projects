import React, { useContext } from "react";
import { GlobalContext } from "../store";

const Secrets = () => {
  const { state } = useContext(GlobalContext);
  React.useEffect(() => {
    console.log(state);
  }, [state]);
  return <div>{state.auth.isLoaded}</div>;
};

export default Secrets;
