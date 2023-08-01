import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 5rem;
	width: 77%;
	display: flex;
	flex-direction: column;
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
`;
