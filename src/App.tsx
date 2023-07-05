import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main';
import UserMainPage from './pages/UserMain/UserMain';
import Chatting from './pages/Chatting/Chatting';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/usermain' element={<UserMainPage />} />
					<Route path='/chatting' element={<Chatting />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
