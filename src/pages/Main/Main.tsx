import MainLogo from '../../assets/icons/MainLogo.png';
import { Link } from 'react-router-dom';
import mainhomeImage from '../../assets/images/mainhome.png';
import chattingImage from '../../assets/images/chatting.png';
import friend from '../../assets/images/friend.webp';
import messagebubble from '../../assets/images/messagebubble.webp';
import link from '../../assets/images/link.webp';
import mainImage from '../../assets/images/mainImage.png';
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
	TextContainer,
	BigText1,
	BigText2,
	ImgContainer,
	MainAvatar,
	MidContent,
	MidSecContent,
	MidSecContentMo,
	SecondSection,
	LeftSection,
	RightContent,
	ThirdSection,
	ThirdContentWrap,
	FourthSection,
	RightSection,
	LeftContent,
	HalfCircle,
	ShareBtn,
	RightImage,
	RightDetailImage,
	DetailImage,
	MidImage,
	LastContent,
} from './MainStyle';
import { useEffect, useState } from 'react';
import { getToken } from '../../api/token';

const MainPage = () => {
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		if (getToken(`accessToken`)) {
			setIsLogin(true);
		} else {
			setIsLogin(false);
		}
	}, []);

	return (
		<>
			<Container>
				<FirstSection>
					<Header>
						<Link to='/mainhome/secret'>
							<Logo src={MainLogo} alt='main-logo' />
						</Link>
						<BtnContainer>
							{isLogin ? (
								<>
									<Link to='/user/edit'>
										<LogIn>로그아웃</LogIn>
									</Link>
								</>
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
						<TextContainer>
							<BigText1>친구들과 함께 만드는,</BigText1>
							<BigText2>우리의 공간</BigText2>
							<MidText>
								자유롭게 사진을 올리고, 공유할 수 있는<br />
								우리만의 공간을 {' '} 버니톡과 함께 만들어가요
							</MidText>
						</TextContainer>
						<ImgContainer>
							<MainAvatar src={mainImage} alt='avatar' />
						</ImgContainer>
					</MainContent>
				</FirstSection>
				<SecondSection>
					<LeftSection>
						<DetailImage src={messagebubble} alt='message-image' />
					</LeftSection>
					<RightContent>
						<MidContent>실시간 멘션 기능</MidContent>
						<MidSecContent>
							익명의 사용자와 친구들의 생각을 실시간으로 확인하고<br />
							공유하는 실시간 멘션기능을 이용해보세요!
						</MidSecContent>
						<MidSecContentMo>
							익명의 사용자와 친구들의 생각을<br />
							실시간으로 확인하고 공유하는<br />
							실시간 멘션기능을 이용해보세요!
						</MidSecContentMo>
					</RightContent>
				</SecondSection>
				
				<ThirdSection>
					<ThirdContentWrap>
						<LeftContent>
							<MidContent>친구들과 채팅하기</MidContent>
							<MidSecContent>
								특별한 우리만의 공간에서
								<br />
								친구들과 채팅하기
							</MidSecContent>
							<MidSecContentMo>
								특별한 우리만의 공간에서
								<br />
								친구들과 채팅하기
							</MidSecContentMo>
						</LeftContent>
						<RightSection>
							<RightImage src={chattingImage} alt='chatting-image' />
							<RightDetailImage src={friend} alt='friend-image' />
						</RightSection>
					</ThirdContentWrap>
				</ThirdSection>
				<FourthSection>
					<LeftSection>
						{' '}
						<MidImage src={link} alt='link-image' />
					</LeftSection>
					<LastContent>
						<MidContent>내가 보고싶은 친구 소환</MidContent>
						<MidSecContent>
							내 공간으로 초대하고 싶은 친구 소환하기
							<br />
							링크 하나로 이어지는 우리들의 마음
						</MidSecContent>
						<MidSecContentMo>
							내 공간으로<br />
							초대하고 싶은 친구 소환하기<br />
							링크 하나로 이어지는 우리들의 마음
						</MidSecContentMo>
					</LastContent>
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
