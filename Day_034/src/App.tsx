import React, { useState, ReactElement } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { TodoContainer, Card, AddTodoCard } from "./components/TodoCard";
import { TodoState } from "./store/todoSlice";
import { useAppDispatch, useAppSelector } from "./store/store";
import { ThemeStateTypes, toggleTheme } from "./store/themeSlice";

const AppContainer = styled.div`
  height: 100vh;
  position: relative;
  color: ${({ isDark }: ThemeStateTypes) => (isDark ? "#fff" : "#000")};
  background-color: ${({ isDark }: ThemeStateTypes) =>
    isDark ? "#1b2027" : "#fff"};
`;

const App = (): ReactElement => {
  const todos = useAppSelector((state) => state.todo);
  const { isDark } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  return (
    <AppContainer className="App" isDark={isDark} {...AppContainer}>
      <TodoContainer>
        <AddTodoCard />
        {todos.map((todo: TodoState) => (
          <Card
            key={todo.id}
            id={todo.id}
            todoTitle={todo.todoTitle}
            todoStatus={todo.isDone}
          />
        ))}
      </TodoContainer>
      <button onClick={() => dispatch(toggleTheme())}>
        {isDark ? "Light" : "Dark"}
      </button>
    </AppContainer>
  );
};

export default App;
