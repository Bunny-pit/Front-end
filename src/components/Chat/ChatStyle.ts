import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 5rem;
	width: 75%;
	display: flex;
	flex-direction: column;
	@media (max-width: 628px) {
		width: 100%;
		padding: 0 5rem;
	}
`;
export const Content = styled.div`
	font-size: 2.5rem;
	margin-left: 5rem;
	color: ${({ theme }) => theme.colors.gray500};
`;
export const ChatBoxConatiner = styled.div`
	margin-top: auto;
	margin-bottom: 5rem;
`;
export const MessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	height: 70vh;
	padding: 10rem;
	@media (max-width: 628px) {
		padding: 3rem;
	}
`;
