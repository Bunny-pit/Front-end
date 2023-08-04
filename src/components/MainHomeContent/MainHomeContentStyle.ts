import styled from 'styled-components';

export const Container = styled.div`
	width: 50%;
	margin: auto;
	height: 100rem;
	overflow-y: auto;
	border-radius: 2rem;
`;

export const ContentBox = styled.div`
	width: 100%;
	height: 25rem;
	display: flex;
	padding: 1rem 5rem;
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
	align-items: center;
`;

export const UserRandomImage = styled.img`
	max-width: 100%;
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

export const GoChat = styled.img`
	margin-left: auto;
	margin-top: auto;
	margin-bottom: 1.5%;
	cursor: pointer;
`;

export const InnerContent = styled.div`
	flex: 2;
	position: relative;
	padding: 5% 2%;
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
	width: 98.5%;
	height: 7rem;
	resize: none;
`;

export const Date = styled.div`
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.gray500};
`;

export const Wrapper = styled.div`
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
