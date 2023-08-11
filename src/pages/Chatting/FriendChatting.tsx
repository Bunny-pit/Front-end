import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
	WorkSpaceWrapper,
	FriendChannels,
	WorkspaceName,
	PlaceHoldContent,
} from './ChattingStyle';
import { Routes, Route } from 'react-router-dom';
import FriendChat from '../../components/Chat/FriendChat';
import { useLocation } from 'react-router-dom';
import FriendDMList from '../DMList/FriendDMList';

const FriendChatting = () => {
	const location = useLocation();

	return (
		<>
			<Header />
			<WorkSpaceWrapper>
				<FriendChannels isRoot={location.pathname === '/friendchatting/*'}>
					<WorkspaceName>다이렉트 메시지</WorkspaceName>
					<FriendDMList></FriendDMList>
				</FriendChannels>
				<Routes>
					<Route path='friendchatting/dm/:nickname' element={<FriendChat />} />
					<Route
						path='*'
						element={
							<PlaceHoldContent>
								채팅할 친구 버니를 골라 채팅을 시작하세요!
							</PlaceHoldContent>
						}
					/>
				</Routes>
			</WorkSpaceWrapper>
			<Footer />
		</>
	);
};
export default FriendChatting;
