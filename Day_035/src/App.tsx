import React, { useState, FC } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App: FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto p-5">sda</main>
      <Footer />
    </div>
  );
};

export default App;
