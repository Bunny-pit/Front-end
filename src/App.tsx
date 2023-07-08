import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main';
import Mainhome from './pages/Mainhome/MainHome';
import UserMainPage from './pages/UserMain/UserMain';
import Chatting from './pages/Chatting/Chatting';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/usermain' element={<UserMainPage />} />
					<Route path='/chatting/*' element={<Chatting />} />
					<Route path='/mainhome' element={<Mainhome />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
