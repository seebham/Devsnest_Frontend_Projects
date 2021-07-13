import React from "react";
import styled from "styled-components";

import Calories from "./CalorieCard";

const AppContainer = styled.div`
  height: 100vh;
  position: relative;
`;

function App() {
  return (
    <AppContainer>
      <Calories />
    </AppContainer>
  );
}

export default App;
