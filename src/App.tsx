import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main';

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
