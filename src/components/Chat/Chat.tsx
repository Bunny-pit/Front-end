import { useParams } from 'react-router-dom';
import {
	Content,
	Container,
	ChatBoxConatiner,
	MessageContainer,
} from '../../components/Chat/ChatStyle';
import ChatBox from '../ChatBox/ChatBox';
import { useState, useRef, useCallback, useEffect } from 'react';
import MessageBubble from '../MessageBubble/MessageBubble';
import { useAutoScroll } from '../../hooks/useAutoScroll';
import { useUser } from '../../utils/swrFetcher';
import { MessageType } from '../../types/chatType';
import { get } from '../../api/api';

const Chat = () => {
	const { nickname } = useParams();
	const chatId = nickname;
	const [messages, setMessages] = useState<string[]>([]);

	const [savedMessages, setSavedMessages] = useState<MessageType[] | null>(
		null,
	);
	const { userData, isError } = useUser();

	if (isError) {
		console.log('유저 데이터를 불러오는데 실패했습니다.');
	} else if (!userData) {
		console.log('유저 데이터를 불러오는 중...');
	}
	const userId = userData?._id;
	const messageListRef = useRef<HTMLDivElement>(null);
	useAutoScroll(messageListRef, messages);

	const onNewMessage = useCallback((newMessage: string) => {
		setMessages((prevMessages) => [...prevMessages, newMessage]);
	}, []);

	useEffect(() => {
		const loadSaveMessage = async () => {
			try {
				const response = await get<MessageType[]>(
					`/api/chat/${chatId}/messages`,
				);
				setSavedMessages(response.data);
				const messageText = response.data.map((msg) => msg.content);
				setMessages(messageText);
			} catch (error) {
				console.error('Error loadSaveMessage:', error);
			}
		};
		loadSaveMessage();
	}, [chatId]);

	return (
		<>
			<Container>
				<Content>예의를 지켜서 올바른 채팅 문화를 만들어요</Content>
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
