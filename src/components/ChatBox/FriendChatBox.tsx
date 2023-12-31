import sendButton from '../../assets/icons/Vector.png';
import { Container, InputBar, SendButton } from './ChatBoxStyle';
import { useEffect, useState } from 'react';
import { useSocket } from '../../hooks/useSocket';
import { MessageType } from '../../types/chatType';

interface ChatBoxProps {
	chatId?: string;
	userId?: string;
	onNewMessage: (message: MessageType) => void;
}

const FriendChatBox = ({ chatId, userId, onNewMessage }: ChatBoxProps) => {
	const [inputArea, setInputArea] = useState('');
	const socket = useSocket(`${process.env.REACT_APP_API_URL}`);

	useEffect(() => {
		if (socket) {
			socket.off('newMessage');
			socket.emit('joinRoom', { chatId, userId });
			socket.on('newMessage', (message) => {
				onNewMessage(message);
			});
		}
		return () => {
			if (socket) {
				socket.emit('leaveRoom', { chatId, userId });
				socket.off('newMessage');
			}
		};
	}, [chatId, userId, onNewMessage, socket]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputArea(event.target.value);
	};

	const handleSendButtonClick = () => {
		if (socket && inputArea.trim().length > 0) {
			socket.emit(
				'friendchatMessage',
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

	const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleSendButtonClick();
		}
	};

	return (
		<>
			<Container>
				<InputBar
					value={inputArea}
					onChange={handleInputChange}
					onKeyUp={handleKeyUp}
					placeholder='메시지 보내기'
				/>

				<SendButton
					src={sendButton}
					alt='send-button'
					onClick={handleSendButtonClick}
				/>
			</Container>
		</>
	);
};
export default FriendChatBox;
