import styled from 'styled-components';

export const Container = styled.div`
	width: 75%;
	margin: 0 auto;
	.uploadImg {
		width: 100%;
		input:first-child {
			width: 100%;
			box-sizing: border-box;
			height: 32rem;
			margin: 5rem 0 2rem;
			background: ${({ theme }) => theme.colors.gray400};
		}
		:nth-child(2) {
			width: 100%;
			height: 15rem;
			box-sizing: border-box;
			margin: 0 0 4rem;
		}
		:nth-child(3) {
			width: 100%;
			height: 8.8rem;
			background: ${({ theme }) => theme.colors.commentpurple};
			border: none;
			border-radius: 1rem;
			color: ${({ theme }) => theme.colors.background};
			font-size: 3.2rem;
			font-weigth: 600;
			margin-bottom: 5rem;
		}
	}
`;
