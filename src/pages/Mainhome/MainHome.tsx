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
	const seed = 'john'; // 아바타 이미지를 생성할 때 사용할 시드 값을 설정
	const avatarUrl = `https://avatars.dicebear.com/api/identicon/${seed}.svg`; // 시드 값으로 아바타 이미지 URL을 생성

	return (
		<>
			<Header />
			<Container>
				<Title>Unknown Bunnies</Title>
				<ContentBox>
					<ImageWrap>
						<UserRandomImage src={avatarUrl} alt='User Random Image' />{' '}
					</ImageWrap>
					<InnerContent>
						<UserSecretName>잠자는 버니</UserSecretName>
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
