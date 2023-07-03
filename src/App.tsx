import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/Main";
import DefaultButton from "./components/Buttons/DefaultButton";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <MainPage />
      <Router></Router>
      <Footer></Footer>
    </>
  );
}

export default App;
