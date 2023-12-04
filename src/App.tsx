import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './pages/Main/Main';
import checkTokenExpirationAndRefresh from './utils/checkTokenExpirationAndRefresh';
import { getToken } from './api/token';

const MainHomeSecret = React.lazy(
	() => import('./pages/Mainhome/MainHomeSecret'),
);
const MainHomeFriends = React.lazy(
	() => import('./pages/Mainhome/MainHomeFriends'),
);
const UserMainPage = React.lazy(() => import('./pages/UserMain/UserMain'));
const Chatting = React.lazy(() => import('./pages/Chatting/Chatting'));
const Detail = React.lazy(() => import('./pages/UserMain/Detail/Detail'));
const LoginPage = React.lazy(() => import('./pages/UserAccount/Login/Login'));
const RegisterPage = React.lazy(
	() => import('./pages/UserAccount/Register/Register'),
);
const UserEditPage = React.lazy(
	() => import('./pages/UserAccount/EditAccount/EditAccount'),
);
const UserDeletePage = React.lazy(
	() => import('./pages/UserAccount/DeleteAccount/DeleteAccount'),
);
const UploadPost = React.lazy(
	() => import('./pages/UserMain/UploadPost/UploadPost'),
);
const FriendChatting = React.lazy(
	() => import('./pages/Chatting/FriendChatting'),
);
const UserMembers = React.lazy(
	() => import('./pages/Admin/UserMembers/UserMembers'),
);
const ReportManagement = React.lazy(
	() => import('./pages/Admin/ReportManagement/ReportManagement'),
);
const AdminMain = React.lazy(() => import('./pages/Admin/Main/AdminMain'));

function App() {
	const [isLogin, setIsLogin] = useState(false);
	const location = useLocation();

	useEffect(() => {
		if (getToken(`accessToken`)) {
			setIsLogin(true);
		} else {
			setIsLogin(false);
		}
	}, [location.pathname]);

	return (
		<Suspense fallback={<div>로딩중</div>}>
			<Routes>
				{!isLogin && (
					<>
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
					</>
				)}
				{isLogin && (
					<>
						<Route path='/user/edit' element={<UserEditPage />} />
						<Route path='/user/delete' element={<UserDeletePage />} />
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
				<Route path='*' element={<MainPage />} />
				<Route path='/' element={<MainPage />} />
				<Route path='/adminMain' element={<AdminMain />} />
				<Route path='/reportManagement' element={<ReportManagement />} />
				<Route path='/userMembers' element={<UserMembers />} />
			</Routes>
		</Suspense>
	);
}

export default App;
