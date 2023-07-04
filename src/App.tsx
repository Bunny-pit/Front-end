import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main';
import UserMainPage from './pages/UserMain/UserMain';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/usermain" element={<UserMainPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
