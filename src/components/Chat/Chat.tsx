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
import { useUser, fetcher } from '../../utils/swrFetcher';
import { MessageType } from '../../types/chatType';
import { get } from '../../api/api';
import useSWR from 'swr';
import { DmListType } from '../../types/chatType';

const Chat = () => {
	const { nickname } = useParams();
	const chatId = nickname;
	const [messages, setMessages] = useState<string[]>([]);
	const { data: savedMessages, error: messageError } = useSWR<MessageType[]>(
		`http://localhost:3000/api/chat/${chatId}/messages`,
		fetcher,
	);
	const { userData, isError } = useUser();
	const [selectedChat, setSelectedChat] = useState<DmListType | null>(null);

	if (isError) {
		console.log('유저 데이터를 불러오는데 실패했습니다.');
	} else if (!userData) {
		console.log('유저 데이터를 불러오는 중...');
	}
	const userId = userData?._id;

	const { data: dmList, error } = useSWR<DmListType[]>(
		`http://localhost:3000/api/chat/${userId}`,
		fetcher,
	);

	const messageListRef = useRef<HTMLDivElement>(null);
	useAutoScroll(messageListRef, messages);

	const onNewMessage = useCallback((newMessage: string) => {
		setMessages((prevMessages) => [...prevMessages, newMessage]);
	}, []);

	useEffect(() => {
		if (savedMessages) {
			const messageText = savedMessages.map((msg) => msg.content);
			setMessages(messageText);
			const chatInfo = dmList?.find((chat) => chat._id === chatId);
			setSelectedChat(chatInfo || null);
		}
	}, [savedMessages, chatId]);

	const chattingWithUser = selectedChat?.users.find(
		(user) => user._id !== userId,
	);
	return (
		<>
			<Container>
				{selectedChat !== null && (
					<Content>{`나와 ${chattingWithUser?.secretName}님의 채팅방입니다.`}</Content>
				)}
				<MessageContainer ref={messageListRef}>
					{savedMessages?.map((message, idx) => (
						<MessageBubble
							key={idx}
							message={message.content}
							currentUser={message.sender._id === userId}
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
