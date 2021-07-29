import React, { useContext } from "react";
import { GlobalContext } from "../store";

const Secrets = () => {
  const { state } = useContext(GlobalContext);
  React.useEffect(() => {
    console.log(state);
  }, [state]);
  return <div>There are no secrets!</div>;
};

export default Secrets;
