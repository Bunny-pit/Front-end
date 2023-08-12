import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import { getToken } from './api/token';

import UserMembers from './pages/Admin/UserMembers/UserMembers';

function App() {
	const [isLogin, setIsLogin] = useState(false);
	const location = useLocation();

	// 페이지 변경시마다 토큰 확인, 토큰 없으면 isLogin false, 있으면 login
	useEffect(() => {
		if (getToken(`accessToken`)) {
			setIsLogin(true);
		} else {
			setIsLogin(false);
		}
		console.log(location.pathname);
		console.log('로그인 아닌 페이지', isLogin);
	}, [location.pathname]);

	//초기 로그인 상태 설정 후 로컬 스토리지 변경시마다 로그인 상태 재설정
	useEffect(() => {
		const checkLogin = () => {
			if (getToken(`accessToken`)) {
				setIsLogin(true);
			} else {
				setIsLogin(false);
			}
		};
		// 초기 로그인 상태 설정
		checkLogin();

		// localStorage 변경시마다 로그인 상태 재설정
		window.addEventListener('storage', checkLogin);
		return () => {
			window.removeEventListener('storage', checkLogin);
		};
	}, []);

	// 특정 페이지 제외 토큰 확인
	useEffect(() => {
		const pathsWithoutTokenCheck = [
			'/login',
			'/register',
			'/',
			'/mainhome/unknown',
		];
		if (!pathsWithoutTokenCheck.includes(location.pathname)) {
			checkTokenExpirationAndRefresh();
		}
	}, [location.pathname]);

	return (
		<>
			<UserMembers></UserMembers>
		</>
	);
}
export default App;
