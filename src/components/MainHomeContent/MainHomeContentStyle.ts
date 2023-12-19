import styled from 'styled-components';

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
	background-color: ${({ theme }) => theme.colors.gray100};
	&:hover {
		background-color: ${({ theme }) => theme.colors.gray200};
		transition: 0.5s;
		transform: scale(1.05);
		border-radius: 2rem;
	}
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
	margin-bottom: 1.5rem;
`;

export const UserName = styled.h2`
	font-size: 2.5rem;
`;

export const IconContainer = styled.div`
	display: flex;
	gap: 2rem;
	margin-left: auto;

	@media (max-width: 768px) {
		gap: 1rem;
	}

	@media (max-width: 390px) {
		gap: 0.1rem;
	}
`;

export const GoChat = styled.div`
	margin-top: 0.3rem;
	cursor: pointer;

	@media (max-width: 768px) {
		margin-top: 0.3rem;
		width: 6.3rem;
	}

	@media (max-width: 390px) {
		margin-top: 0.3rem;
		width: 6rem;
	}
`;

export const GoProfile = styled.div`
	cursor: pointer;

	@media (max-width: 768px) {
		width: 6.5rem;
	}

	@media (max-width: 390px) {
		width: 6rem;
	}
`;

export const Report = styled.button`
	width: 50px;
	height: 3.5rem;
	border: 0;
	border-radius: 0.7rem;
	background-color: ${({ theme }) => theme.colors.maincolor};
	color: #fff;
	cursor: pointer;

	@media (max-width: 768px) {
		margin-top: 0.1rem;
		width: 45px;
		height: 3.5rem;
	}

	@media (max-width: 390px) {
		margin-top: 0.1rem;
		width: 40px;
		height: 25px;
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
	display: flex;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	margin-bottom: 2rem;
	flex: 0 0 auto;
	scroll-snap-align: start;
	margin-right: 10px;
	&:last-child {
		margin-right: 0;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
	max-height: 450px;
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
	resize: none;
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
	cursor: pointer;
`;

export const Delete = styled.button`
	width: 7rem;
	height: 3.5rem;
	border: 0;
	border-radius: 0.7rem;
	background-color: ${({ theme }) => theme.colors.maincolor};
	color: #fff;
	cursor: pointer;
`;
