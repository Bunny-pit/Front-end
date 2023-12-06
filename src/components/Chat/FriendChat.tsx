import { useParams } from 'react-router-dom';
import {
	Content,
	Container,
	ChatBoxConatiner,
	MessageContainer,
} from '../../components/Chat/ChatStyle';
import FriendChatBox from '../ChatBox/FriendChatBox';
import { useState, useRef, useCallback, useEffect } from 'react';
import MessageBubble from '../MessageBubble/MessageBubble';
import { useAutoScroll } from '../../hooks/useAutoScroll';
import { useUser, fetcher } from '../../utils/swrFetcher';
import { MessageType } from '../../types/chatType';
import useSWR, { mutate } from 'swr';
import { DmListType } from '../../types/chatType';

const FriendChat = () => {
	const { nickname } = useParams();
	const chatId = nickname;
	const [messages, setMessages] = useState<MessageType[]>([]);
	const { data: savedMessages } = useSWR<MessageType[]>(
		`${process.env.REACT_APP_API_URL}/api/chat/${chatId}/friend/messages`,
		fetcher,
	);
	const { userData, isError } = useUser();
	const [selectedChat, setSelectedChat] = useState<DmListType | null>(null);

	if (isError) {
		console.log('유저 데이터를 불러오는데 실패했습니다.');
	}
	const userId = userData?._id;

	const { data: dmList } = useSWR<DmListType[]>(
		`${process.env.REACT_APP_API_URL}/api/chat/friend/${userId}`,
		fetcher,
	);

	const messageListRef = useRef<HTMLDivElement>(null);
	useAutoScroll(messageListRef, messages.length);

	const onNewMessage = useCallback(
		(newMessage: MessageType) => {
			mutate(
				`${process.env.REACT_APP_API_URL}/api/chat/${chatId}/friend/messages`,
				(prevMessages: MessageType[] | undefined) => {
					if (prevMessages) {
						return [...prevMessages, newMessage];
					}
					return [newMessage];
				},
				false,
			);
			setMessages((prevMessages) => [...prevMessages, newMessage]);
		},
		[chatId],
	);

	useEffect(() => {
		const chatInfo = dmList?.find((chat) => chat._id === chatId);
		if (chatInfo) {
			setSelectedChat(chatInfo);
		} else {
			setSelectedChat(null);
		}
	}, [dmList, chatId]);

	useEffect(() => {
		if (savedMessages) {
			setMessages(savedMessages);
			const chatInfo = dmList?.find((chat) => chat._id === chatId);
			setSelectedChat(chatInfo || null);
		}
	}, [savedMessages, chatId, dmList]);

	const chattingWithUser = selectedChat?.users.find(
		(user) => user._id !== userId,
	);
	return (
		<>
			<Container>
				{selectedChat !== null ? (
					<Content>{`나와 ${chattingWithUser?.userName}님의 채팅방입니다.`}</Content>
				) : (
					<Content>채팅방이 존재하지 않습니다.</Content>
				)}
				<MessageContainer ref={messageListRef}>
					{savedMessages &&
						savedMessages.map((message) => (
							<MessageBubble
								key={message._id}
								message={message.content}
								currentUser={message.sender._id === userId}
							/>
						))}
				</MessageContainer>
				<ChatBoxConatiner>
					<FriendChatBox
						chatId={chatId}
						userId={userId}
						onNewMessage={onNewMessage}></FriendChatBox>
				</ChatBoxConatiner>
			</Container>
		</>
	);
};

export default FriendChat;
