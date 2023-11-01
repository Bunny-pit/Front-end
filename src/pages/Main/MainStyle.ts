import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Container = styled.div`
	margin: 0;
	overflow: hidden;
`;
export const FirstSection = styled.div`
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	background: linear-gradient(
		180deg,
		#7954f8 0%,
		rgba(251, 155, 249, 0.62) 78%,
		#fff 100%
	);
`;
export const Header = styled.div`
	padding: 4rem 8rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

`;

const shakeAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
`;
export const Logo = styled.img`
	width: 15rem;
	cursor: pointer;
	transition: transform 0.3s ease-in-out;

	&:hover {
		animation: ${shakeAnimation} 0.5s ease infinite;
	}

`;
export const BtnContainer = styled.div`
	
`;
export const LogIn = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	margin-right: 2rem;
	color: ${({ theme }) => theme.colors.background};
	font-weight: 800;
	font-size: 2rem;

`;

export const SignUp = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.background};
	font-weight: 800;
	font-size: 2rem;
	}
`;
export const MainContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1200px;
	margin: 0 auto;

	@media (max-width:767px) {
		flex-direction: column;
		width: 90%;
		padding: 10rem 0;
		text-align: center;
	}
`;

export const TextContainer = styled.div`
	
`

export const BigText1 = styled.p`
	margin: 0;
	color: ${({ theme }) => theme.colors.background};
	font-size: 8rem;
	font-weight: 900;
	line-height: 12rem;
	
	@media (max-width:767px) {
		font-size: 4rem;
		line-height: 6rem;
	}
`;
export const BigText2 = styled.p`
	margin: 0;
	color: ${({ theme }) => theme.colors.pointcolor};
	font-size: 8rem;
	font-weight: 900;
	
	@media (max-width:767px) {
		font-size: 4rem;
	}
`;
export const MidText = styled.p`
	color: #fff;
	font-size: 4rem;
	font-weight: 400;
	letter-spacing: 0;
	line-height: 6rem;

	@media (max-width:767px) {
		font-size: 2.5rem;
		line-height: 4rem;
	}
`;
export const ImgContainer = styled.div`

`;

export const MainAvatar = styled.img`
	width: 100%;
`;
export const SecondSection = styled.div`
	width: 1200px;
	margin: 20rem auto;
	display: flex;
	justify-content: space-between;

	@media (max-width:767px) {
		width: 90%;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`;


const bubble = keyframes`
	0%{ transform: translateY(-50px); }
	100%{ transform: translateY(-35px); }
`;

export const LeftSection = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	animation: ${bubble} 0.5s ease infinite alternate;
`;


export const DetailImage = styled.img`
	width: 100%;
	
`;

export const RightSection = styled.div`
	position: relative;
	width: 50%;

	@media (max-width:767px) {
		width: 100%;
	}
`;
export const RightImage = styled.img`
	width: 100%;

	@media (max-width:767px) {
		margin-bottom: 6rem;
	}
`;
export const RightDetailImage = styled.img`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 80%;
	transform: translateX(-28rem);

	@media (max-width:767px) {
		transform: translateX(-30%);
	}
`;
export const RightContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const LastContent = styled.div`

`;
export const LeftContent = styled.div`
	width: 50%;

	@media (max-width:767px) {
		width: 100%;
		text-align: center;
	}
`;
export const MidContent = styled.p`
	margin: 1rem 0;
	font-size: 6rem;
	font-weight: 700;

	@media (max-width:767px) {
		font-size: 5rem;
	}
`;
export const MidSecContent = styled.p`
	font-size: 2.8rem;
	display: block;

	@media (max-width:767px) {
		display: none;
	}
	
`;
export const MidSecContentMo = styled.p`
	font-size: 2.8rem;
	text-align: center;

	@media all and (min-width:1024px) {
		display: none;
	}
`;
export const MidImage = styled.img`
	width: 100%;
`;
export const ThirdSection = styled.div`
	background-color: #9ff984;
	padding: 20rem 0;
`;

export const ThirdContentWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1200px;
	margin: 0 auto;

	@media (max-width:767px) {
		width: 90%;
		flex-direction: column-reverse;
	}
`;

export const FourthSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1200px;
	margin: 0 auto;
	padding: 20rem 0;
	background-color: ${({ theme }) => theme.colors.background };

	@media (max-width:767px) {
		width: 90%;
		flex-direction: column;
	}
`;

export const HalfCircle = styled.div`
	height: 62rem;
	background: linear-gradient(
		360deg,
		#7954f8 0%,
		rgba(251, 155, 249, 0.62) 70%,
		rgba(251, 155, 249, 0) 100%
	);
	border-bottom-left-radius: 50% 80%;
	border-bottom-right-radius: 50% 80%;
	margin-bottom: 20rem;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width:767px) {
		margin-bottom: 0;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
`;
export const ShareBtn = styled.button`
	width: 50rem;
	padding: 3rem;
	background: ${({ theme }) => theme.colors.background};
	border-radius: 10rem;
	border: none;
	color: ${({ theme }) => theme.colors.pointcolor};
	font-size: 3.5rem;
	font-weight: 700;
	cursor: pointer;
	transition: all 0.5s;
	&:hover {
		background: ${({ theme }) => theme.colors.pointcolor};
		color: ${({ theme }) => theme.colors.background};
	}

	@media (max-width:767px) {
		width: 100%;
		margin: 0 auto;
		font-size: 2.6rem;
	}

`;
