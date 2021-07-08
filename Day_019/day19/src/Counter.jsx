import React from "react";
import styled from "styled-components";

const CounterDiv = styled.div`
  background-color: #eee;
`;

const Counter = () => {
  const [count, setcount] = React.useState(0);
  return (
    <div onClick={() => setcount((prevCount) => prevCount + 1)}>{count}</div>
  );
};

export default Counter;
