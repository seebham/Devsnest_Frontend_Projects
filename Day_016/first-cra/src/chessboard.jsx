import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 32vh;
  height: 32vh;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  border: 1px solid #000;
  margin: 0 auto;
  margin-right: 100px;
`;

const Box = styled.div`
  width: 4vh;
  height: 4vh;
  background-color: ${(props) => (props.isBlack ? "black" : "white")};
`;

let Boxes = [];
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    i % 2 === 0
      ? j % 2 === 0
        ? Boxes.push(<Box key={`${i} + ${j}`} />)
        : Boxes.push(<Box key={`${i} + ${j}`} isBlack />)
      : j % 2 === 0
      ? Boxes.push(<Box key={`${i} + ${j}`} isBlack />)
      : Boxes.push(<Box key={`${i} + ${j}`} />);
  }
}

const Chessboard = () => {
  return <Container>{Boxes}</Container>;
};

export default Chessboard;
