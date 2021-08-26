import React, { useState, ReactElement } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { TodoContainer, Card, AddTodoCard } from "./components/TodoCard";

const AppContainer = styled.div`
  height: 100vh;
  position: relative;
  color: ${({ isDark }: any) => (isDark ? "#fff" : "#000")};
  background-color: ${({ isDark }: any) => (isDark ? "#1b2027" : "#fff")};
`;

const App = (): ReactElement => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const todos = useSelector((state: any): any => state.todo);
  console.log(todos);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <AppContainer className="App" isDark={isDarkTheme} {...AppContainer}>
        <TodoContainer>
          <AddTodoCard />
          {todos.map((todo: any) => (
            <Card
              key={todo.id}
              id={todo.id}
              todoTitle={todo.todoTitle}
              todoStatus={todo.isDone}
            />
          ))}
        </TodoContainer>
        <ThemeToggle />
      </AppContainer>
    </ThemeContext.Provider>
  );
};

export default App;
