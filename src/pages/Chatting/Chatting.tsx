import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import sendicon from '../../assets/icons/Sendicon.png';
import {
	Container,
	DmContainer,
	ChattingContainer,
	Dmtitle,
	DmList,
	ProfileCard,
	ProfileImg,
	UserNickName,
	InputContainer,
	InputArea,
	SendIcon,
	MessageContainer,
	Message,
} from './ChattingStyle';
import userimage from '../../assets/images/userimage.png';
import { useState, useEffect, useRef } from 'react';

const userProfile = [
	{ username: 'cute_hyeon', id: 1 },
	{ username: 'navi_rabbit3', id: 2 },
	{ username: 'lets_drinkwine', id: 3 },
	{ username: 'cartoon_writer', id: 4 },
	{ username: 'cute_hansome_gang', id: 5 },
];
const Chatting = () => {
	const [messages, setMessages] = useState<string[]>([]);
	const [inputMessage, setInputMessage] = useState<string>('');
	const messagesEndRef = useRef<HTMLDivElement | null>(null);
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);

	useEffect(() => {
		const handleResize = () => {
			setWindowHeight(window.innerHeight);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const sendMessage = () => {
		if (inputMessage.trim() !== '') {
			setMessages([...messages, inputMessage]);
			setInputMessage('');
		}
	};

	const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>): void => {
		if (e.key === 'Enter') {
			e.preventDefault();
			sendMessage();
		}
	};

	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [messages]);

	return (
		<>
			<Header />
			<Container>
				<DmContainer>
					<Dmtitle>다이렉트 메시지</Dmtitle>
					<DmList>
						{userProfile.map((userData) => (
							<ProfileCard key={userData.id}>
								<ProfileImg src={userimage} alt='userimage' />
								<UserNickName>{userData.username}</UserNickName>
							</ProfileCard>
						))}
					</DmList>
				</DmContainer>
				<ChattingContainer windowHeight={windowHeight}>
					{messages.map((message, index) => (
						<MessageContainer key={index}>
							<Message>{message}</Message>
						</MessageContainer>
					))}
					<div ref={messagesEndRef} />
					<InputContainer>
						<InputArea
							placeholder='메시지 보내기'
							value={inputMessage}
							onChange={(e: any) => setInputMessage(e.target.value)}
							onKeyDown={handleEnterKey}
						/>
						<SendIcon src={sendicon} alt='send-icon' onClick={sendMessage} />
					</InputContainer>
				</ChattingContainer>
			</Container>
			<Footer />
		</>
	);
};
export default Chatting;
