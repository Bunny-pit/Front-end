import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './pages/Main/Main';
import MainHomeSecret from './pages/Mainhome/MainHomeSecret';
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
import ReportManagement from './pages/Admin/ReportManagement/ ReportManagement';
import AdminMain from './pages/Admin/Main/AdminMain';

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
	}, [location.pathname]);
	return (
		<>
			<Routes>
				{!isLogin && ( //로그인 안되어 있을 경우에만 접근 가능한 페이지. 로그인 시 접근 불가.
					<>
						<Route path='/register' element={<RegisterPage />} />
						<Route path='/login' element={<LoginPage />} />
					</>
				)}
				{isLogin && ( //로그인 되어 있을 경우에만 접근 가능한 페이지. 비로그인 시 접근 불가.
					<>
						<Route path='/user/edit' element={<UserEditPage />} />
						<Route path='/user/withdrawal' element={<UserWithdrawalPage />} />
						<Route path='/post' element={<UserMainPage />} />
						<Route path='/post/user/:userId' element={<UserMainPage />} />
						<Route path='/post/:postId' element={<Detail />} />
						<Route path='/post/upload' element={<UploadPost />} />
						<Route path='/mainhome/secret' element={<MainHomeSecret />} />
						<Route path='/mainhome/friends' element={<MainHomeFriends />} />
						<Route path='/chatting/*' element={<Chatting />} />
						<Route path='/friendchatting/*' element={<FriendChatting />} />
					</>
				)}
				{/* 로그인 유무에 상관없이 접근 가능 */}
				<Route path='/' element={<MainPage />} />
				<Route path='/mainhome/secret' element={<MainHomeSecret />} />

				<Route path='/adminMain' element={<AdminMain />} />
				<Route path='/reportManagement' element={<ReportManagement />} />
				<Route path='/userMembers' element={<UserMembers />} />

				{/* 유효하지 않은 페이지 접근시 메인페이지로 이동 */}
				<Route path='*' element={<MainPage />} />
			</Routes>
		</>
	);
}
export default App;
