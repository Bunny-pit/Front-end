import { useParams } from 'react-router-dom';
import {
	Content,
	Container,
	ChatBoxConatiner,
	MessageContainer,
} from '../../components/Chat/ChatStyle';
import ChatBox from '../ChatBox/ChatBox';
import { useState, useRef } from 'react';
import MessageBubble from '../MessageBubble/MessageBubble';
import { useAutoScroll } from '../../hooks/useAutoScroll';

const Chat = () => {
	const { nickname } = useParams();
	const chatId = '64b5f1cfe121bc3f9001eb41';
	const userId = '64b2bbd49ac9b031f09b302a';
	const [messages, setMessages] = useState<string[]>([]);

	const messageListRef = useRef<HTMLDivElement>(null);
	useAutoScroll(messageListRef, messages);

	const onNewMessage = (newMessage: string) => {
		setMessages((prevMessages) => [...prevMessages, newMessage]);
	};

	return (
		<>
			<Container>
				<Content>이 대화방은 나와 {nickname} 님과의 대화방입니다</Content>
				<MessageContainer ref={messageListRef}>
					{messages.map((message, idx) => (
						<MessageBubble key={idx} message={message} />
					))}
				</MessageContainer>
				<ChatBoxConatiner>
					<ChatBox
						chatId={chatId}
						userId={userId}
						onNewMessage={onNewMessage}></ChatBox>
				</ChatBoxConatiner>
			</Container>
		</>
	);
};

export default Chat;
