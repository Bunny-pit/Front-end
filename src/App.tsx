import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main';
import Mainhome from './pages/Mainhome/MainHome';
import UserMainPage from './pages/UserMain/UserMain';
import Chatting from './pages/Chatting/Chatting';
import Detail from './pages/UserMain/Detail/Detail';
import LoginPage from './pages/UserAccount/Login/Login';
// import SignUpPage from './pages/SignUp/SignUp'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<MainPage />} />
					{/* {!isLogin && (<>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUp />} />
          </>)} */}
					<Route path='/login' element={<LoginPage />} />
					<Route path='/post' element={<UserMainPage />} />
					<Route path='/post/:postId' element={<Detail />} />
					<Route path='/mainhome' element={<Mainhome />} />
					<Route path='/chatting/*' element={<Chatting />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
