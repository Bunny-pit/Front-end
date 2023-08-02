import sendBtn from '../../assets/icons/Sendicon.png';
import { Container, InputBar, SendButton } from './ChatBoxStyle';
import { useEffect, useState } from 'react';
import { useSocket } from '../../hooks/useSocket';

interface ChatBoxProps {
	chatId?: string;
	userId: string;
	onNewMessage: (message: string) => void;
}

const ChatBox = ({ chatId, userId, onNewMessage }: ChatBoxProps) => {
	const [inputArea, setInputArea] = useState('');
	const socket = useSocket(
		// 'https://port-0-back-end-kvmh2mljxnw03c.sel4.cloudtype.app',
		'http://localhost:3000',
	);

	useEffect(() => {
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
	}, [chatId, userId, onNewMessage, socket]);

	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputArea(event.target.value);
	};

	const handleSendButtonClick = () => {
		if (socket && inputArea.trim().length > 0) {
			socket.emit(
				'chatMessage',
				{
					senderId: userId,
					chatId,
					content: inputArea,
				},
				(error: any) => {
					if (error) {
						console.error(error);
					}
				},
			);
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
