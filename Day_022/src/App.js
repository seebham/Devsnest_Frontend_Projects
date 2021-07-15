import React, { useState, useEffect } from "react";
import styled from "styled-components";

import TemplateCard from "./components/template.jsx";

const AppContainer = styled.div`
  height: 100vh;
  position: relative;
`;

function App() {
  const [templates, setTemplates] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setTemplates(data.data.memes));
  }, []);
  return (
    <AppContainer>
      {templates.map((template) => {
        return <TemplateCard templateData={template} key={template.id} />;
      })}
    </AppContainer>
  );
}

export default App;
