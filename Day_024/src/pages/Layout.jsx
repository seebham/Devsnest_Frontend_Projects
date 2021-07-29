import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../store";

//styled-components
const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
`;
const NavBarContainer = styled.div`
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.035);
`;
const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1.5rem;
`;
const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  width: 40%;
`;
const LinksDiv = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  width: 60%;
  gap: 8rem;
`;
const Links = styled.div`
  font-size: 1.2rem;

  &:hover {
    font-weight: bold;
  }
`;

const Content = styled.main`
  width: 100vw;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 1rem;
  padding: 1rem;
`;

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(GlobalContext);
  useEffect(() => {
    setTimeout(() => dispatch({ type: "LOADSTATE" }), 1000);
  }, [dispatch]);
  return (
    <AppContainer>
      <NavBarContainer>
        <NavBar>
          <Heading>Our Secrets</Heading>
          <LinksDiv>
            <Link to="/">
              <Links>Home</Links>
            </Link>
            <Link to="/secrets">
              <Links>Secrets</Links>
            </Link>
            {state.isLoaded ? (
              state.isAuth ? (
                <Links onClick={() => dispatch({ type: "LOGOUT" })}>
                  Logout
                </Links>
              ) : (
                <Link to="/login">
                  <Links>Login</Links>
                </Link>
              )
            ) : (
              "Loading..."
            )}
          </LinksDiv>
        </NavBar>
      </NavBarContainer>

      <Content>{children}</Content>
    </AppContainer>
  );
};

export const LayoutWrapper = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default Layout;
