import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import sendIcon from '../../assets/icons/Sendicon.png';
import {
	Container,
	Title,
	ContentBox,
	ImageWrap,
	UserRandomImage,
	UserSecretName,
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

const Mainhome = () => {
	const randomNames = [
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

	const getRandomName = () => {
		const randomIndex = Math.floor(Math.random() * randomNames.length);
		return randomNames[randomIndex];
	};

	const secretName = `${getRandomName()} 버니`;

	const seed = secretName;
	const avatarUrl = `https://avatars.dicebear.com/api/identicon/${seed}.svg`;

	return (
		<>
			<Header />
			<Container>
				<Title>Unknown Bunnies</Title>
				<ContentBox>
					<ImageWrap>
						<UserRandomImage src={avatarUrl} alt='User Random Image' />
					</ImageWrap>
					<InnerContent>
						<UserSecretName>{secretName}</UserSecretName>
						<Content>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
							inventore perferendis porro tempora doloribus similique, autem
							suscipit temporibus eum veniam rem aliquid magni voluptatum? Quam
							culpa quia dolores recusandae esse.
						</Content>
						<Date>
							<p>23:32・2023년 5월 5일</p>
						</Date>
						<Wrapper>
							<Edit>수정</Edit>
							<Delete>삭제</Delete>
						</Wrapper>
					</InnerContent>
				</ContentBox>
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
