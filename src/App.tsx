import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main';
import LoginPage from './pages/Login/Login'
// import SignUpPage from './pages/SignUp/SignUp'

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* {!isLogin && (<>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUp />} />
          </>)} */}
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
