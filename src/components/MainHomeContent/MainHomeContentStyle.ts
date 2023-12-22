import styled from 'styled-components';
import reportIcon from '../../assets/icons/flasher.png';
import message from '../../assets/icons/message.png';
import Group from '../../assets/icons/Group.png';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 50%;
	margin: 0 auto;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const AddContentButton = styled.button`
	width: auto;
	padding: 1.5rem 5rem;
	margin-bottom: 5%;
	color: #fff;
	font-size: 2rem;
	font-weight: bold;
	background-color: #cdc0fc;
	border: none;
	border-radius: 0.7rem;
	cursor: pointer;
`;

export const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100vh;
	overflow-y: auto;
	overflow-x: hidden;
	border-radius: 1rem;
	margin-bottom: 10rem;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	&::-webkit-scrollbar {
		display: none;
	}
	scrollbar-width: none;
	-ms-overflow-style: none;
`;

export const EmptyArea = styled.h1`
	color: ${({ theme }) => theme.colors.gray600};
	font-size: 3.5rem;
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const ContentBox = styled.div`
	width: 100%;
	display: flex;
	padding: 2rem 5rem 2rem 5rem;
	box-sizing: border-box;
	border-bottom: 1px solid #eee;
	background-color: ${({ theme }) => theme.colors.gray100};
`;

export const ImageWrap = styled.div`
	margin-right: 1.5rem;
`;

export const UserImage = styled.img`
	width: 8rem;
	height: 8rem;
	object-fit: cover;
	border-radius: 50%;
`;

export const UserContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 2.5rem;
`;

export const UserName = styled.h2`
	font-size: 2.5rem;
`;

export const IconContainer = styled.div`
	display: flex;
	margin-left: auto;

	@media (max-width: 768px) {
		gap: 1rem;
	}

	@media (max-width: 390px) {
		gap: 0.1rem;
	}
`;

export const GoChat = styled.button`
	width: 7rem;
	height: 4rem;
	border: none;
	background-color: transparent;
	background-image: url(${message});
	background-repeat: no-repeat;
	background-position: center 0.5rem;
	background-size: 60%;
	cursor: pointer;

	@media (max-width: 768px) {
		margin-top: 0.3rem;
		width: 6.3rem;
		background-position: center 0.3rem;
		background-size: 75%;
	}

	@media (max-width: 390px) {
		margin-top: 0.3rem;
		width: 7rem;
		height: 5rem;
		background-position: center 0.7rem;
		background-size: 80%;
	}
`;

export const GoProfile = styled.button`
	width: 7rem;
	height: 4rem;
	border: none;
	background-color: transparent;
	background-image: url(${Group});
	background-repeat: no-repeat;
	background-position: center 0.3rem;
	background-size: 55%;
	cursor: pointer;
	padding: 0 10px;
	@media (max-width: 768px) {
		width: 6.5rem;
	}

	@media (max-width: 390px) {
		width: 6rem;
	}
`;

export const Report = styled.button`
	width: 7rem;
	height: 3.5rem;
	border: none;
	background-color: transparent;
	background-image: url(${reportIcon});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 60%;
	cursor: pointer;

	@media (max-width: 768px) {
		margin-top: 0.1rem;
		width: 7rem;
		height: 4rem;
		background-position: center;
		background-size: 70%;
	}

	@media (max-width: 390px) {
		margin-top: 0.1rem;
		width: 6rem;
		height: 5rem;
		background-size: 90%;
	}
`;

export const InnerContent = styled.div`
	width: 80%;
	min-height: 100px;
	max-height: 800px;
	flex: 2;
	position: relative;
	padding: 1rem 3rem;
`;

export const ContentContainer = styled.div`
	position: relative;
`;

export const Content = styled.div`
	color: ${({ theme }) => theme.colors.text};
	font-size: 1.8rem;
`;

export const SliderContainer = styled.div`
	width: 100%;
	height: auto;
	overflow: hidden;
	display: flex;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
	margin-bottom: 2rem;
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	overflow: hidden;
	flex: 0 0 auto;
	scroll-snap-align: start;
	margin-right: 10px;
	&:last-child {
		margin-right: 0;
	}
`;

export const Image = styled.img`
	width: auto;
	height: auto;
	max-height: 450px;
`;

export const DotsContainer = styled.div`
	text-align: center;
	width: 100%;
	margin-bottom: 2rem;
`;

export const Dot = styled.span`
	height: 1.5rem;
	width: 1.5rem;
	margin: 0 5px;
	background-color: #bbb;
	border-radius: 50%;
	display: inline-block;
	transition: background-color 0.6s ease;
	cursor: pointer;
	&.active {
		background-color: #717171;
	}
`;

export const TextArea = styled.div`
	width: 100%;
	max-height: 300px;
	overflow-wrap: break-word;
`;

export const EditContentArea = styled.textarea`
	border-radius: 1rem;
	width: 100%;
	height: 10rem;
	font-size: 1.8rem;
	resize: none;
	border: none;
`;

export const TextCountArea = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

export const TextCount = styled.div`
	font-size: 1.5rem;
`;

export const BottomContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Date = styled.div`
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.gray500};
`;

export const ButtonWrapper = styled.div`
	display: flex;
	gap: 1.5rem;
`;

export const Edit = styled.button`
	width: 7rem;
	height: 3.5rem;
	border: 0;
	border-radius: 0.7rem;
	background-color: #cdc0fc;
	color: #fff;
	font-weight: bold;
	cursor: pointer;
`;

export const Delete = styled.button`
	width: 7rem;
	height: 3.5rem;
	border: 0;
	border-radius: 0.7rem;
	background-color: ${({ theme }) => theme.colors.maincolor};
	color: #fff;
	font-weight: bold;

	cursor: pointer;
`;
