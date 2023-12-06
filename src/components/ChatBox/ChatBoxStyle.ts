import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const InputBar = styled.input`
	background-color: ${({ theme }) => theme.colors.gray200};
	font-size: 2.5rem;
	width: 70%;
	border-radius: 2rem;
	border: none;
	padding: 2rem;
	@media (max-width: 628px) {
		width: 100%;
	}
`;
export const SendButton = styled.img`
	margin-left: 2rem;
	cursor: pointer;
`;
