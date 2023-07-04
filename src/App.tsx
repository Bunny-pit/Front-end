import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main';
import UserMain from './pages/UserMain/UserMain';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/usermain" element={<UserMain />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
