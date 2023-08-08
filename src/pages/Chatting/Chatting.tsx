import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
	WorkSpaceWrapper,
	Channels,
	WorkspaceName,
	PlaceHoldContent,
} from './ChattingStyle';
import DMList from '../DMList/DMList';
import { Routes, Route } from 'react-router-dom';
import Chat from '../../components/Chat/Chat';
import { useLocation } from 'react-router-dom';

const Chatting = () => {
	const location = useLocation();

	return (
		<>
			<Header />
			<WorkSpaceWrapper>
				<Channels isRoot={location.pathname === '/chatting'}>
					<WorkspaceName>다이렉트 메시지</WorkspaceName>
					<DMList></DMList>
				</Channels>
				<Routes>
					<Route path='/dm/:nickname' element={<Chat />} />
					<Route
						path='*'
						element={
							<PlaceHoldContent>
								채팅할 버니를 골라 채팅을 시작하세요
							</PlaceHoldContent>
						}
					/>
				</Routes>
			</WorkSpaceWrapper>
			<Footer />
		</>
	);
};
export default Chatting;
