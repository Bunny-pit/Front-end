import sendBtn from '../../assets/icons/Sendicon.png';
import { Container, InputBar, SendButton } from './ChatBoxStyle';
import { useEffect, useState } from 'react';
import { useSocket } from '../../hooks/useSocket';

interface ChatBoxProps {
	chatId: string;
	userId: string;
	onNewMessage: (message: string) => void;
}

const ChatBox = ({ chatId, userId, onNewMessage }: ChatBoxProps) => {
	const [inputArea, setInputArea] = useState('');
	const socket = useSocket('http://localhost:3000');

	useEffect(() => {
		console.log('useEffect is called');
		if (socket) {
			socket.off('newMessage');
			socket.emit('joinRoom', { chatId, userId });
			socket.on('newMessage', (message) => {
				onNewMessage(message.content);
			});
		}
		return () => {
			if (socket) {
				socket.emit('leaveRoom', { chatId, userId });
				socket.off('newMessage');
			}
		};
	}, [socket, chatId, userId]);

	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputArea(event.target.value);
	};

	const handleSendButtonClick = () => {
		if (socket) {
			socket.emit('chatMessage', {
				senderId: userId,
				chatId,
				content: inputArea,
			});
		}
		setInputArea('');
	};
	return (
		<>
			<Container>
				<InputBar
					value={inputArea}
					onChange={handleInputChange}
					placeholder='메시지 보내기'
				/>
				<SendButton
					src={sendBtn}
					alt='send-button'
					onClick={handleSendButtonClick}
				/>
			</Container>
		</>
	);
};
export default ChatBox;
