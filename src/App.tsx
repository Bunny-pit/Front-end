import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { checkTokenExpirationAndRefresh } from './utils/checkTokenExpirationAndRefresh';
import MainPage from './pages/Main/Main';
import MainHomeUnknown from './pages/Mainhome/MainHomeUnknown';
import MainHomeFriends from './pages/Mainhome/MainHomeFriends';
import UserMainPage from './pages/UserMain/UserMain';
import Chatting from './pages/Chatting/Chatting';
import Detail from './pages/UserMain/Detail/Detail';
import LoginPage from './pages/UserAccount/Login/Login';
import RegisterPage from './pages/UserAccount/Login/Register';
import UserEditPage from './pages/UserAccount/UserEdit/UserEdit';
import UserWithdrawalPage from './pages/UserAccount/UserWithdrawal/UserWithdrawal';
import UploadPost from './pages/UserMain/UploadPost/UploadPost';
import FriendChatting from './pages/Chatting/FriendChatting';

import AdminMain from './pages/Admin/Main/AdminMain';

function App() {
	const [isLogin, setIsLogin] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const pathsWithoutTokenCheck = ['/login', '/register', '/mainhome'];
		if (!pathsWithoutTokenCheck.includes(location.pathname)) {
			checkTokenExpirationAndRefresh();
		}
	}, [location.pathname]);

	return (
		<>
			<AdminMain></AdminMain>
		</>
	);
}
export default App;

// const location = useLocation();

// // location pathname 변경시마다 로그인 확인
// useEffect(() => {
// 	if (localStorage.getItem('isLogin') == '1') {
// 		setIsLogin(true);
// 	} else {
// 		setIsLogin(false);
// 	}
// }, [location.pathname])
// // 웹 진입시 로그인 확인
// useEffect(() => {
// 	const checkLogin = () => {
// 		if (localStorage.getItem('isLogin') == '1') {
// 			setIsLogin(true);
// 		} else {
// 			setIsLogin(false);
// 		}
// 	}
// 	// 초기 로그인 상태 설정
// 	checkLogin();

// 	// localStorage 변경시마다 로그인 상태 재설정
// 	window.addEventListener('storage', checkLogin);
// 	return () => {
// 		window.removeEventListener('storage', checkLogin)
// 	};
// }, []);
