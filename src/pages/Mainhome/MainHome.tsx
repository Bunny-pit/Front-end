import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import message from '../../assets/icons/message.png';
import sendIcon from '../../assets/icons/Sendicon.png';
import md5 from 'md5'; // 추가된 라이브러리
import {
	Container,
	Title,
	ContentBox,
	ImageWrap,
	UserRandomImage,
	UserSecretContainer,
	UserSecretName,
	GoSecretChat,
	InnerContent,
	Content,
	Date,
	Wrapper,
	Edit,
	Delete,
	TextBox,
	TextWrapper,
	TextArea,
	SendButton,
	SendIcon,
} from './MainHomeStyle';

const Mainhome: FC = () => {
	//FC는 Function Component를 나타냄

	interface Post {
		_id: string;
		// name: string;
		title: string;
		content: string;
		createdAt: string;
		updatedAt: string;
		__v: number;
	}

	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await axios.get(
					'https://port-0-back-end-kvmh2mljxnw03c.sel4.cloudtype.app/api/mainhome',
				);
				setPosts(res.data);
			} catch (err) {
				console.error(err);
			}
		};

		fetchPosts();
	}, []);

	const randomNames: string[] = [
		'지루한',
		'따분한',
		'목마른',
		'배고픈',
		'화가난',
		'소심한',
		'당당한',
		'외로운',
		'고민중인',
		'코딩하는',
		'배아픈',
		'똥마려운',
		'요리하는',
		'공부중인',
		'화장하는',
		'유쾌한',
		'밥먹는',
	];

	const getRandomName = (): string => {
		const randomIndex = Math.floor(Math.random() * randomNames.length);
		return randomNames[randomIndex];
	};

	const secretName: string = `${getRandomName()} 버니`;

	const randomEmail: string = `${secretName}@example.com`;

	const hashedEmail: string = md5(randomEmail.trim().toLowerCase());

	const avatarUrl: string = `https://www.gravatar.com/avatar/${hashedEmail}?d=identicon`;

	return (
		<>
			<Header />
			<Container>
				<Title>Unknown Bunnies</Title>
				{posts.map((post, index) => (
					<ContentBox key={index}>
						<ImageWrap>
							<UserRandomImage src={avatarUrl} alt='User Random Image' />
						</ImageWrap>
						<InnerContent>
							<UserSecretContainer>
								<UserSecretName>{secretName}</UserSecretName>
								<GoSecretChat src={message} alt='message Icon' />
							</UserSecretContainer>
							<Content>{post.content}</Content>
							<Date>
								<p>{post.createdAt}</p>
							</Date>
							<Wrapper>
								<Edit>수정</Edit>
								<Delete>삭제</Delete>
							</Wrapper>
						</InnerContent>
					</ContentBox>
				))}
			</Container>
			<TextBox>
				<TextWrapper>
					<TextArea></TextArea>
					<SendButton>
						<SendIcon src={sendIcon} alt='Send Icon' />
					</SendButton>
				</TextWrapper>
			</TextBox>
			<Footer />
		</>
	);
};

export default Mainhome;
