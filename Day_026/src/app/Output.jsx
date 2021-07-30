import React from "react";
import { useSelector } from "react-redux";

const Output = () => {
  const { username, email } = useSelector((state) => state.form);
  return (
    <div>
      <h4>{`Username: ${username}`}</h4>
      <h4>{`Email: ${email}`}</h4>
    </div>
  );
};

export default Output;
