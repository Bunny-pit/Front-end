import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;

export const InputBar = styled.textarea`
	background-color: ${({ theme }) => theme.colors.gray200};
	height: 5rem;
	font-size: 2.5rem;
	width: 70%;
	border-radius: 2.1rem;
	border: none;
	padding-left: 2rem;
	padding-top: 2rem;
	resize: none;
	@media (max-width: 628px) {
		width: 100%;
	}
`;
export const SendButton = styled.img`
	margin-left: 2rem;
	cursor: pointer;
`;
