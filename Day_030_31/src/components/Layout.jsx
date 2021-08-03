import React, { Children } from "react";

const Layout = ({ children }) => {
  return <div className="container lg mx-auto">{Children}</div>;
};

export default Layout;
