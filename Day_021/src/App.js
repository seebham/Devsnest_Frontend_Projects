import React from "react";
import styled from "styled-components";

import { CalorieContainer, Card, AddCalorieCard } from "./CalorieCard";

const AppContainer = styled.div`
  height: 100vh;
  position: relative;
`;

function App() {
  const [calories, setCalories] = React.useState([
    { id: 197, fruit: "Apple", calories: "62.3" },
    { id: 196, fruit: "Avocado", calories: "144.3" },
    { id: 195, fruit: "Strawberry", calories: "24.6" },
    { id: 194, fruit: "Pineapple", calories: "43" },
    { id: 193, fruit: "Papaya", calories: "23.9" },
    { id: 192, fruit: "Orange", calories: "37.2" },
  ]);

  const handleDelCalorie = (id) =>
    setCalories((prevCalories) => prevCalories.filter((el) => el.id !== id));
  return (
    <AppContainer>
      <CalorieContainer>
        <AddCalorieCard isEditing></AddCalorieCard>
        {calories.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            fruit={el.fruit}
            calories={el.calories}
            del={handleDelCalorie}
          />
        ))}
      </CalorieContainer>
    </AppContainer>
  );
}

export default App;
