import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: auto;
	padding-bottom: 10rem;
`;

export const Title = styled.div`
	width: 100%;
	margin: 15rem 0 15rem 0;
	text-align: center;
	font-size: 5rem;
	font-weight: 700;
	color: #db7bf9;
`;

export const ContentBox = styled.div`
	width: 100%;
	display: flex;
	padding: 0 22%;
	box-sizing: border-box;
`;
export const ImageWrap = styled.div`
	flex: 1;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const UserRandomImage = styled.img`
	max-width: 100%;
	margin: 0 auto;
`;
export const InnerContent = styled.div`
	flex: 2;
	position: relative;
	padding: 5%;
`;

export const UserSecretName = styled.h2`
	font-size: 2.5rem;
`;

export const Content = styled.p`
	font-size: 1.8rem;
`;

export const Date = styled.p`
	font-size: 1.5rem;
	color: #717171;
`;

export const Wrapper = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
`;

export const Edit = styled.button``;
export const Delete = styled.button``;

export const TextBox = styled.div`
	position: fixed;
	bottom: 24rem;
	width: 100%;
	height: 15rem;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TextWrapper = styled.div`
	background-color: #d9d9d9;
	width: 57%;
	height: 7rem;
	display: flex;
	align-items: center;
	border-radius: 2rem;
`;

export const TextArea = styled.input`
	flex-grow: 9.5;
	border: 0px;
	margin-left: 3rem;
	height: 90%;
	background-color: transparent;
	font-size: 2rem;
	outline: none;
`;

export const SendButton = styled.button`
	flex-grow: 0.5;
	height: 90%;
	border: 0;
	background-color: transparent;
`;

export const SendIcon = styled.img`
	cursor: pointer;
`;
