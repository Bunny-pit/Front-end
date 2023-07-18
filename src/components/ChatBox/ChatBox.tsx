import sendBtn from '../../assets/icons/Sendicon.png';
import { Container, InputBar, SendButton } from './ChatBoxStyle';
import { useEffect, useState } from 'react';
import { useSocket } from '../../hooks/useSocket';
import MessageBubble from '../MessageBubble/MessageBubble';

interface ChatBoxProps {
	chatId: string;
	userId: string;
}

const ChatBox = ({ chatId, userId }: ChatBoxProps) => {
	const [inputArea, setInputArea] = useState('');
	const [messages, setMessages] = useState<string[]>([]);
	const socket = useSocket('http://localhost:3000');

	useEffect(() => {
		if (socket) {
			socket.emit('joinRoom', { chatId, userId });
			socket.on('newMessage', (message) => {
				setMessages((prevMessages) => [...prevMessages, message]);
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
				{messages.map((message, idx) => (
					<MessageBubble key={idx} message={message} />
				))}
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
