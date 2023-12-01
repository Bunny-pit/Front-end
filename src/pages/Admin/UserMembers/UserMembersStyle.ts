import styled from 'styled-components';

export const Container = styled.div`
	min-width: 100vh;
	height: 100vh;
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
	width: 80%;
`;

export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
`;

export const Thead = styled.thead`
	background-color: #7954f8;
	color: #fff;
	font-size: 2.6rem;

	@media (max-width: 768px) {
		font-size: 2.3rem;
	}
	@media (max-width: 390px) {
		font-size: 1.5rem;
	}
`;

export const Tbody = styled.tbody`
	font-size: 2.5rem;

	@media (max-width: 768px) {
		font-size: 2.2rem;
	}
	@media (max-width: 390px) {
		font-size: 1.4rem;
	}
`;

export const Th = styled.th`
	text-align: center;
	padding: 20px;
`;
export const Td = styled.td`
	text-align: center;
	padding: 20px;
`;
export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 2rem;
	padding: 2rem 0;
	width: 10rem;
	background-color: ${({ theme }) => theme.colors.pointcolor};
	border-radius: 1.2rem;
	color: white;
	font-weight: bold;
	border: none;
	cursor: pointer;
	font-size: 1.9rem;

	@media (max-width: 768px) {
		font-size: 1.7rem;
	}
	@media (max-width: 390px) {
		font-size: 1rem;
		padding: 1.2rem 0;
		width: 6rem;
	}
`;
