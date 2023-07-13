import styled from 'styled-components';

export const Container = styled.div`
	width: 80%;
	margin: auto;
	max-height: 120rem;
	overflow-y: auto;
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
	padding: 0 15%;
	box-sizing: border-box;
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
	// margin: 0 auto;
`;
export const InnerContent = styled.div`
	flex: 2;
	position: relative;
	padding: 5% 2%;
`;
export const UserSecretContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const UserSecretName = styled.h2`
	font-size: 2.5rem;
`;

export const GoSecretChat = styled.img`
	margin-left: auto;
	margin-top: auto;
	cursor: pointer;
`;

export const ContentContainer = styled.div`
	position: relative;
`;

export const Content = styled.p<{ isEditing: boolean }>`
	display: ${(props) => (props.isEditing ? 'none' : 'block')};
	font-size: 1.8rem;
`;

export const EditContentArea = styled.textarea<{ isEditing: boolean }>`
	position: absolute;
	border-radius: 1rem;
	top: 0;
	left: 0;
	width: 100%;
	height: 5rem;
	resize: none;
	display: ${(props) => (props.isEditing ? 'block' : 'none')};
`;

export const Date = styled.div`
	font-size: 1.5rem;
	color: #717171;
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
	background-color: #feb29a;
	cursor: pointer;
`;
export const Delete = styled.button`
	width: 7rem;
	height: 3.5rem;
	border: 0;
	border-radius: 0.7rem;
	background-color: #fb7c7c;
	cursor: pointer;
`;

export const TextBox = styled.div`
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
