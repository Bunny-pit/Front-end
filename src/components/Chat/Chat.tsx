// import { useParams } from 'react-router-dom';
// import {
// 	Content,
// 	Container,
// 	ChatBoxConatiner,
// 	MessageContainer,
// } from '../../components/Chat/ChatStyle';
// import ChatBox from '../ChatBox/ChatBox';
// import { useState, useRef, useCallback, useEffect } from 'react';
// import MessageBubble from '../MessageBubble/MessageBubble';
// import { useAutoScroll } from '../../hooks/useAutoScroll';
// import { useUser, fetcher } from '../../utils/swrFetcher';
// import { MessageType } from '../../types/chatType';
// import useSWR, { mutate } from 'swr';
// import { DmListType } from '../../types/chatType';

// const Chat = () => {
// 	const { nickname } = useParams();
// 	const chatId = nickname;
// 	const [messages, setMessages] = useState<string[]>([]);
// 	const { data: savedMessages, error: messageError } = useSWR<MessageType[]>(
// 		`${process.env.REACT_APP_API_URL}/api/chat/${chatId}/messages`,
// 		fetcher,
// 	);
// 	const { userData, isError } = useUser();
// 	const [selectedChat, setSelectedChat] = useState<DmListType | null>(null);

// 	if (isError) {
// 		console.log('유저 데이터를 불러오는데 실패했습니다.');
// 	} else if (!userData) {
// 		console.log('유저 데이터를 불러오는 중...');
// 	}
// 	const userId = userData?._id;
// 	const email = userData?.email;
// 	const secretName = userData?.secretName;

// 	const { data: dmList, error } = useSWR<DmListType[]>(
// 		`${process.env.REACT_APP_API_URL}/api/chat/${userId}`,
// 		fetcher,
// 	);

// 	const messageListRef = useRef<HTMLDivElement>(null);
// 	useAutoScroll(messageListRef, messages);

// 	const onNewMessage = useCallback(
// 		(newMessage: MessageType) => {
// 			newMessage.sender = {
// 				_id: userId ?? '',
// 				email: email ?? '',
// 				secretName: secretName ?? '',
// 			};
// 			mutate(
// 				`${process.env.REACT_APP_API_URL}/api/chat/${chatId}/messages`,
// 				(prevMessages: MessageType[] | undefined) => {
// 					if (prevMessages) {
// 						return [...prevMessages, newMessage];
// 					}
// 					return [newMessage];
// 				},
// 				false,
// 			);
// 			setMessages((prevMessages) => [...prevMessages, newMessage.content]);
// 		},
// 		[userId, chatId],
// 	);

// 	useEffect(() => {
// 		const chatInfo = dmList?.find((chat) => chat._id === chatId);
// 		if (chatInfo) {
// 			setSelectedChat(chatInfo);
// 		} else {
// 			setSelectedChat(null);
// 		}
// 	}, [dmList, chatId]);

// 	useEffect(() => {
// 		if (savedMessages) {
// 			const messageText = savedMessages.map((msg) => msg.content);
// 			setMessages(messageText);
// 			const chatInfo = dmList?.find((chat) => chat._id === chatId);
// 			setSelectedChat(chatInfo || null);
// 		}
// 	}, [savedMessages, chatId, dmList]);

// 	const chattingWithUser = selectedChat?.users.find(
// 		(user) => user._id !== userId,
// 	);
// 	return (
// 		<>
// 			<Container>
// 				{selectedChat !== null ? (
// 					<Content>{`나와 ${chattingWithUser?.secretName}님의 채팅방입니다.`}</Content>
// 				) : (
// 					<Content>채팅방이 존재하지 않습니다.</Content>
// 				)}
// 				<MessageContainer ref={messageListRef}>
// 					{savedMessages &&
// 						savedMessages.map((message) => (
// 							<MessageBubble
// 								key={message._id}
// 								message={message.content}
// 								currentUser={message.sender._id === userId}
// 							/>
// 						))}
// 				</MessageContainer>
// 				<ChatBoxConatiner>
// 					<ChatBox
// 						chatId={chatId}
// 						userId={userId}
// 						onNewMessage={onNewMessage}></ChatBox>
// 				</ChatBoxConatiner>
// 			</Container>
// 		</>
// 	);
// };

// export default Chat;
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
import useSWR, { mutate } from 'swr';
import { DmListType } from '../../types/chatType';

const Chat = () => {
	const { nickname } = useParams();
	const chatId = nickname;
	const [messages, setMessages] = useState<MessageType[]>([]);
	const { data: savedMessages, error: messageError } = useSWR<MessageType[]>(
		`${process.env.REACT_APP_API_URL}/api/chat/${chatId}/messages`,
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
	const email = userData?.email;
	const secretName = userData?.secretName;

	const { data: dmList, error } = useSWR<DmListType[]>(
		`${process.env.REACT_APP_API_URL}/api/chat/${userId}`,
		fetcher,
	);

	const messageListRef = useRef<HTMLDivElement>(null);
	useAutoScroll(messageListRef, messages.length);

	const onNewMessage = useCallback(
		(newMessage: MessageType) => {
			mutate(
				`${process.env.REACT_APP_API_URL}/api/chat/${chatId}/messages`,
				(prevMessages: MessageType[] | undefined) => {
					if (prevMessages) {
						return [...prevMessages, newMessage];
					}
					return [newMessage];
				},
				false,
			);
			setMessages((prevMessages) => [...prevMessages, newMessage]);
			console.log('이거', messages);
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
					<Content>{`나와 ${chattingWithUser?.secretName}님의 채팅방입니다.`}</Content>
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
