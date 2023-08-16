import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
	WorkSpaceWrapper,
	FriendChannels,
	WorkspaceName,
	PlaceHoldContent,
	ButtonWrapper,
	DMButton,
	ModalContent,
	ModalBackground,
	ExitButton,
} from './ChattingStyle';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FriendChat from '../../components/Chat/FriendChat';
import { useLocation } from 'react-router-dom';
import FriendDMList from '../DMList/FriendDMList';
import exiticon from '../../assets/icons/CommentDeleteIcon.png';

const FriendChatting = () => {
	const location = useLocation();
	const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 628);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const handleWindowResize = () => {
		setIsMobileView(window.innerWidth <= 628);
	};
	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return (
		<>
			<Header />
			<WorkSpaceWrapper>
				{isMobileView ? (
					<ButtonWrapper>
						<DMButton onClick={toggleModal}>채팅목록보기</DMButton>
						{isModalOpen && (
							<ModalBackground>
								<ModalContent>
									<ExitButton src={exiticon} alt='exit' onClick={toggleModal} />
									<FriendDMList />
								</ModalContent>
							</ModalBackground>
						)}
					</ButtonWrapper>
				) : (
					<FriendChannels isRoot={location.pathname === '/friendchatting/*'}>
						<WorkspaceName>다이렉트 메시지</WorkspaceName>
						<FriendDMList></FriendDMList>
					</FriendChannels>
				)}
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
