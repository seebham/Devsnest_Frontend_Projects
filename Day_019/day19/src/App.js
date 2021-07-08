import styled from "styled-components";
import Counter from "./Counter";

const AppContainer = styled.main`
  position: absolute;
`;

function App() {
  return (
    <AppContainer>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </AppContainer>
  );
}

export default App;
