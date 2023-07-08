import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import userImage from '../../assets/images/userimage.png';
import sendIcon from '../../assets/icons/Sendicon.png';
import {
	Container,
	Title,
	ContentBox,
	ImageWrap,
	UserImage,
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
	return (
		<>
			<Header />
			<Container>
				<Title>Unknown Bunnies</Title>
				<ContentBox>
					<ImageWrap>
						<UserImage src={userImage} alt='User Image' />
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
