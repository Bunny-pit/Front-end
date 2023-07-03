import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/Main";
import DefaultButton from "./components/Buttons/DefaultButton";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <MainPage />
      <Router>
        {/* <Header />
      <Footer /> */}
      </Router>
    </>
  );
}

export default App;
