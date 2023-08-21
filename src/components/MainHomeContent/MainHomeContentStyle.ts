import styled from 'styled-components';

export const Container = styled.div`
	width: 50%;
	margin: auto;
	height: 100rem;
	overflow-y: auto;
	border-radius: 2rem;
	overflow-x: hidden;

	@media (max-width: 768px) {
		width: 80%;
	}

	@media (max-width: 390px) {
		width: 95%;
	}
`;

export const EmptyArea = styled.h1`
	color: ${({ theme }) => theme.colors.gray600};
	font-size: 3.5rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const ContentBox = styled.div`
	width: 100%;
	height: 25rem;
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
	flex: 0.5;
	margin: auto;
	display: flex;
	justify-content: left;
	align-items: center;' 
`;

export const UserImage = styled.img`
	width: 8rem;
	height: 8rem;
	object-fit: cover;
	margin: 0 auto;
	border-radius: 50%;
`;

export const UserContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const UserName = styled.h2`
	font-size: 2.5rem;
`;

export const IconContainer = styled.div`
	display: flex;
	gap: 2rem;
	margin-left: auto;
`;

export const GoChat = styled.div`
	margin-top: 0.5rem;
	cursor: pointer;
`;

export const GoProfile = styled.div`
	cursor: pointer;
`;

export const Report = styled.button`
	width: 50px;
	height: 30px;
	border: 0;
	border-radius: 0.7rem;
	background-color: ${({ theme }) => theme.colors.maincolor};
	color: #fff;
	cursor: pointer;
`;

export const InnerContent = styled.div`
	flex: 2;
	position: relative;
	padding: 1rem 3rem;
`;

export const ContentContainer = styled.div`
	position: relative;
`;

export const Content = styled.p`
	color: ${({ theme }) => theme.colors.text};
	font-size: 1.8rem;
`;

export const EditContentArea = styled.textarea`
	position: absolute;
	border-radius: 1rem;
	top: 0;
	left: 0;
	width: 100%;
	height: 7rem;
	resize: none;
`;

export const Date = styled.div`
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.gray500};
`;

export const ButtonWrapper = styled.div`
	position: absolute;
	display: flex;
	gap: 1.5rem;
	bottom: 0;
	right: 0;
	padding-right: 2.5rem;
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
