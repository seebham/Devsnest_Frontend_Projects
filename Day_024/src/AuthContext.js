import React, { useState, useContext } from "react";

const AuthContext = React.createContext();
const AuthUpdateContext = React.createContext();

// Provider
const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userState, setUserState] = useState({ username: "" });

  const toggleIsAuth = () => setIsAuth((prev) => !prev);

  return (
    <AuthContext.Provider value={isAuth}>
      <AuthContext.Provider value={toggleIsAuth}>
        {children}
      </AuthContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
