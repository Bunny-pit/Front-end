import React from 'react';
import MainLogo from '../../assets/icons/MainLogo.png';
import GreenHeart from '../../assets/images/greenheart.png';
import BlueHeart from '../../assets/images/blueheart.png';
import PinkHeart from '../../assets/images/pinkheart.png';
import Avatar from '../../assets/images/avatar.png';
import { Link } from 'react-router-dom';
import mainhomeImage from '../../assets/images/mainhome.png';
import mainhomeDetail from '../../assets/images/mainhomedetail.png';
import chattingImage from '../../assets/images/chatting.png';
import friend from '../../assets/images/friend.png';
import messagebubble from '../../assets/images/messagebubble.png';
import link from '../../assets/images/link.png';

import {
	FirstSection,
	Container,
	Header,
	Logo,
	LogIn,
	BtnContainer,
	SignUp,
	MainContent,
	MidText,
	BigText1,
	BigText2,
	GHeart,
	BHeart,
	PHeart,
	ImgContainer,
	MainAvatar,
	MidContent,
	MidSecContent,
	SecondSection,
	LeftSection,
	RightContent,
	ThirdSection,
	FourthSection,
	RightSection,
	LeftContent,
	HalfCircle,
	ShareBtn,
	LeftImage,
	LeftDetailImage,
	RightImage,
	RightDetailImage,
	DetailImage,
	MidImage,
} from './MainStyle';
import { useUser } from '../../utils/swrFetcher';
import { useState } from 'react';

const MainPage = () => {
	const { userData, isError } = useUser();

	return (
		<>
			<Container>
				<FirstSection>
					<Header>
						<Logo src={MainLogo} alt='main-logo' />
						<BtnContainer>
							{userData ? (
								<Link to='/user/edit'>
									<LogIn>로그아웃</LogIn>
								</Link>
							) : (
								<Link to='/login'>
									<LogIn>로그인</LogIn>
								</Link>
							)}
							<Link to='/register'>
								<SignUp>회원가입</SignUp>
							</Link>
						</BtnContainer>
					</Header>
					<MainContent>
						<BigText1>친구들과 함께 만드는,</BigText1>
						<BigText2>우리의 공간</BigText2>
						<MidText>
							자유롭게 사진을 올리고, 공유할 수 있는 우리만의 공간을 <br />{' '}
							버니톡과 함께 만들어가요
						</MidText>
						<ImgContainer>
							<MainAvatar src={Avatar} alt='avatar' />
							<GHeart src={GreenHeart} alt='green-heart' />
							<BHeart src={BlueHeart} alt='blue-heart' />
							<PHeart src={PinkHeart} alt='pink-heart' />
						</ImgContainer>
					</MainContent>
				</FirstSection>
				<SecondSection>
					<LeftSection>
						<LeftImage src={mainhomeImage} alt='mainhome-image' />
						<LeftDetailImage src={mainhomeDetail} alt='mainhome-image' />
						<DetailImage src={messagebubble} alt='message-image' />
					</LeftSection>
					<RightContent>
						<MidContent>실시간 멘션 기능</MidContent>
						<MidSecContent>
							익명의 사용자와 친구들의 생각을 실시간으로 확인하고 공유하는
							<br />
							실시간 멘션기능을 이용해보세요!
						</MidSecContent>
					</RightContent>
				</SecondSection>
				<ThirdSection>
					<LeftContent>
						<MidContent>친구들과 채팅하기</MidContent>

						<MidSecContent>
							왠지 특별한 우리만의 공간에서
							<br />
							친구들과 채팅하기
						</MidSecContent>
					</LeftContent>
					<RightSection>
						<RightImage src={chattingImage} alt='chatting-image' />
						<RightDetailImage src={friend} alt='friend-image' />
					</RightSection>
				</ThirdSection>
				<FourthSection>
					<LeftSection>
						{' '}
						<MidImage src={link} alt='link-image' />
					</LeftSection>
					<RightContent>
						<MidContent>내가 보고싶은 친구 소환</MidContent>

						<MidSecContent>
							내 공간으로 초대하고 싶은 친구 소환하기
							<br />
							링크 하나로 이어지는 우리들의 마음
						</MidSecContent>
					</RightContent>
				</FourthSection>
				<HalfCircle>
					<Link to='/register'>
						<ShareBtn>나만의 공간 만들러 가기</ShareBtn>
					</Link>
				</HalfCircle>
			</Container>
		</>
	);
};

export default MainPage;
