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
import useSWR from 'swr';

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
	console.log('messages', messages);
	const senderId = savedMessages?.map((msg) => msg.sender._id);

	return (
		<>
			<Container>
				<Content>나와 님의 채팅방입니다</Content>
				<MessageContainer ref={messageListRef}>
					{messages.map((message, idx) => (
						<MessageBubble
							key={idx}
							message={message}
							currentUser={senderId !== undefined && senderId[1] === userId}
						/>
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
