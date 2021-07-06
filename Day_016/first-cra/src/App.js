import React from "react";
import styled from "styled-components";
import Chessboard from "./chessboard";
import MemeBox from "./MemeBox";

const AppContainer = styled.div`
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

function App() {
  return (
    <AppContainer>
      <Chessboard />
      <MemeBox />
    </AppContainer>
  );
}

export default App;
