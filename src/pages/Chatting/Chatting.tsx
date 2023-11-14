import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
	WorkSpaceWrapper,
	Channels,
	WorkspaceName,
	PlaceHoldContent,
	ButtonWrapper,
	DMButton,
	ModalContent,
	ModalBackground,
	ExitButton,
} from './ChattingStyle';
import DMList from '../DMList/DMList';
import { Routes, Route } from 'react-router-dom';
import Chat from '../../components/Chat/Chat';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import exiticon from '../../assets/icons/CommentDeleteIcon_11zon.webp';

const Chatting = () => {
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
									<DMList />
								</ModalContent>
							</ModalBackground>
						)}
					</ButtonWrapper>
				) : (
					<Channels $isRoot={location.pathname === '/chatting/*'}>
						<WorkspaceName>다이렉트 메시지</WorkspaceName>
						<DMList />
					</Channels>
				)}

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
