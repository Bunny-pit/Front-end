import styled from 'styled-components';

export const TextBox = styled.div`
	bottom: 24rem;
	width: 100%;
	height: 15rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TextWrapper = styled.div`
	width: 50%;
	height: 7rem;
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.gray200};
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
