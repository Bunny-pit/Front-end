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
		console.log(location.pathname)
		console.log('로그인 아닌 페이지', isLogin)
	}, [location.pathname])

	//초기 로그인 상태 설정 후 로컬 스토리지 변경시마다 로그인 상태 재설정
	useEffect(() => {
		const checkLogin = () => {
			if (getToken(`accessToken`)) {
				setIsLogin(true);
			} else {
				setIsLogin(false);
			}
		}
		// 초기 로그인 상태 설정
		checkLogin();

		// localStorage 변경시마다 로그인 상태 재설정
		window.addEventListener('storage', checkLogin);
		return () => {
			window.removeEventListener('storage', checkLogin)
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
			<Routes>

				{!isLogin && ( //로그인 안되어 있을 경우 register, login만 접근 가능.
					<>
						<Route path='/' element={<MainPage />} />
						<Route path='/register' element={<RegisterPage />} />
						<Route path='/login' element={<LoginPage />} />
					</>
				)}
				{isLogin && ( // 로그인 했을 때만 렌더링
					<>
						<Route path='/user/edit' element={<UserEditPage />} />
						<Route path='/user/withdrawal' element={<UserWithdrawalPage />} />
						<Route path='/post' element={<UserMainPage />} />
						<Route path='/post/user/:email' element={<UserMainPage />} />
						<Route path='/post/:postId' element={<Detail />} />
						<Route path='/post/upload' element={<UploadPost />} />
						<Route path='/mainhome/unknown' element={<MainHomeUnknown />} />
						<Route path='/mainhome/friends' element={<MainHomeFriends />} />
						<Route path='/chatting/*' element={<Chatting />} />
						<Route path='/friendchatting/*' element={<FriendChatting />} />
					</>
				)}
				{/* 유효하지 않은 페이지 접근시 메인페이지로 이동 */}
				<Route path="*" element={<MainPage />} />
			</Routes>
		</>
	);
}
export default App;
