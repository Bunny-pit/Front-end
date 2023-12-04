import styled from 'styled-components';

export const Container = styled.div`
	min-width: 100vh;
	min-height: 100vh;
	text-align: center;
	box-sizing: border-box;
`;

export const Content = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.p`
	font-size: 5rem;
	font-weight: 700;

	@media (max-width: 768px) {
		font-size: 4rem;
	}
	@media (max-width: 390px) {
		font-size: 3rem;
	}
`;

export const TableContainer = styled.div`
	width: 100%;
`;
