import React from "react";
import styled from "styled-components";

const CalorieContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 60vh;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCard = styled.div`
  background-color: #393e46;
  width: 80%;
  padding: 1.5em;
  margin-bottom: 2em;

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(255, 211, 105, 0.9) 0px 0px 0px 1px;

  &:hover {
    transition: all ease-in-out 0.2s;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0px inset,
      rgba(255, 211, 105, 0.5) 2px 2px 1px 2px;
  }
`;

const Fruit = styled.div`
  font-size: 2em;
  font-weight: 700;
  color: #eeeeee;
`;

const CalorieCount = styled.div`
  font-size: 1.2em;
  font-weight: 500;
  color: #ffd369;
`;

// Card Component
const Card = (props) => {
  return (
    <StyledCard>
      <Fruit>{props.fruit}</Fruit>
      <CalorieCount>{props.calories}</CalorieCount>
    </StyledCard>
  );
};

const Calories = () => {
  let coloriesCards = [
    { id: 197, fruit: "Apple", calories: "62.3" },
    { id: 196, fruit: "Avocado", calories: "144.3" },
    { id: 195, fruit: "Strawberry", calories: "24.6" },
    { id: 194, fruit: "Pineapple", calories: "43" },
    { id: 193, fruit: "Papaya", calories: "23.9" },
    { id: 192, fruit: "Orange", calories: "37.2" },
  ];

  return (
    <CalorieContainer>
      {coloriesCards.map((el) => (
        <Card key={el.id} fruit={el.fruit} calories={el.calories} />
      ))}
    </CalorieContainer>
  );
};

export default Calories;
