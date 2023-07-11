import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main';
import Mainhome from './pages/Mainhome/MainHome';
import UserMainPage from './pages/UserMain/UserMain';
import Chatting from './pages/Chatting/Chatting';
import Detail from './pages/UserMain/Detail/Detail';
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/usermain' element={<UserMainPage />} />
					<Route path='/Detail' element={<Detail />} />
					<Route path='/mainhome' element={<Mainhome />} />
					<Route path='/chatting' element={<Chatting />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
