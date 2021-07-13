import React from "react";
import styled from "styled-components";

const CounterCard = styled.div`
  width: 2em;
  height: 2em;
  cursor: pointer;
  font-size: 2em;
  font-weight: 500;
  background-color: #476072;
  padding: 0.5em;
  border-radius: 0.3em;
  text-align: center;
  display: grid;
  place-items: center;
  font-weight: 900;
`;

const Counter = () => {
  const [count, setcount] = React.useState(0);
  return (
    <CounterCard onClick={() => setcount((prevCount) => prevCount + 1)}>
      <span>{count}</span>
    </CounterCard>
  );
};

export default Counter;
