import styled from "styled-components";
import Counter from "./Counter";

const AppContainer = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
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
