import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import userImage from '../../assets/images/userimage.png';
import {
	Container,
	Title,
	ContentBox,
	ImageWrap,
	UserImage,
} from './MainHomeStyle';

const Mainhome = () => {
	return (
		<>
			<Header />
			<Container>
				<Title>
					<h1>Unknown Bunnies</h1>
				</Title>
				<ContentBox>
					<ImageWrap>
						<UserImage src={userImage} alt='User Image' />
					</ImageWrap>
				</ContentBox>
			</Container>
			<Footer />
		</>
	);
};

export default Mainhome;
